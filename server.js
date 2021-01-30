const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();
//Middleware
app.use(bodyParser.json());

//import all router
const auth = require("./Routes/Auth");

//connect to DB
mongoose.connect(
  process.env.DB_COONECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connected to db")
);

app.use("/", auth);

app.listen(5000, () => {
  console.log("server is running on");
});
