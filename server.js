const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
//Middleware
app.use(bodyParser.json());
app.use(cors());
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
