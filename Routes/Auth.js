const router = require("express").Router();
const User = require("../Models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const { registrationValidation, loginValidation } = require("./validation");

//registration user
router.post("/registration", async (req, res) => {
  console.log(req.body);
  //authentication
  const { error } = registrationValidation({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  if (error) {
    console.log(error);
    return res.status(400).send({
      error: error.details[0].message,
    });
  }
  const existUser = await User.findOne({ email: req.body.email });
  console.log(existUser);
  if (existUser) {
    res.status(200).send({
      error: "El correo electronico ya ha sido tomado",
    });
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
      surname: "",
      phone: "",
      country: "",
      region: "",
      shipping_Address: "",
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
      const token = jwt.sign(
        {
          _id: saveduser._id,
          email: saveduser.email,
          name: saveduser.name,
          verified: saveduser.verified,
        },
        process.env.TOKEN_SECRET
      );
      res.header("auth-token", token).send({
        token: token,
      });
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
  if (!existUser)
    return res.status(400).send({
      error: "No se encuentra el correo electrónico",
    });
  const validPass = await bcrypt.compare(req.body.password, existUser.password);
  if (!validPass)
    return res.status(400).send({
      error: "Contraseña invalida",
    });
  //create and assign a token
  const token = jwt.sign(
    {
      _id: existUser._id,
      email: existUser.email,
      name: existUser.name,
      verified: existUser.verified,
    },
    process.env.TOKEN_SECRET
  );
  res.header("auth-token", token).send({
    token: token,
  });
});

router.patch("/verified", async (req, res) => {
  console.log(req.body);
  const user = await User.findOne({ email: req.body.email });
  const validPass = await bcrypt.compare(
    req.body.password,
    user.verification_code
  );
  if (!validPass) {
    return res.status(400).send({
      error: "Codigo invalido",
    });
  } else {
    const user = await User.updateOne(
      { email: req.body.email },
      { verified: true }
    );
    return res.status(400).send({
      verification: true,
    });
  }
});

module.exports = router;
