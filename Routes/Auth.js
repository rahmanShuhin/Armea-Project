const router = require("express").Router();
const User = require("../Models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const { registrationValidation, loginValidation } = require("./validation");

//registration user
router.post("/registration", async (req, res) => {
  //authentication
  const { error } = registrationValidation({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  if (error) {
    console.log(error);
    return res.status(400).send(error.details[0].message);
  }
  const existUser = await User.findOne({ email: req.body.email });
  console.log(existUser);
  if (existUser) {
    res.status(200).send("Email is Already Taken");
  } else {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    //create new user
    const random = Math.floor(10000 + Math.random() * 90000);
    const var_code = await bcrypt.hash(random.toString(), salt);
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashPassword,
      surname: req.body.surname,
      phone: req.body.phone,
      country: req.body.country,
      region: req.body.region,
      shipping_Address: req.body.shipping_Address,
      verfied: false,
      verification_code: var_code,
    });
    try {
      const saveduser = await user.save();

      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.E_MAIL, // generated ethereal user
          pass: process.env.E_PASS, // generated ethereal password
        },
        tls: {
          rejectUnauthorized: false,
        },
      });
      let info = await transporter.sendMail({
        from: process.env.E_MAIL, // sender address
        to: `${saveduser.email}`, // list of receivers
        subject: "Email Verification", // Subject line
        text: `Please Confirm Your Account By This Code ${random}`, // plain text body
        html: `<p>Please Confirm Your Account By This Code </p>
        <h2>${random}</h2>`, // html body
      });
      console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      res.send({ user: user._id, code: random.toString() });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
});

//login user
router.post("/login", async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) {
    console.log(error);
    return res.status(400).send(error.details[0].message);
  }
  const existUser = await User.findOne({ email: req.body.email });
  if (!existUser) return res.status(400).send("Email is not found");
  const validPass = await bcrypt.compare(req.body.password, existUser.password);
  if (!validPass) return res.status(400).send("Invalid Password");
  //create and assign a token
  const token = jwt.sign(
    { _id: existUser._id, name: existUser.name },
    process.env.TOKEN_SECRET
  );
  res.header("auth-token", token).send(token);
});

module.exports = router;
