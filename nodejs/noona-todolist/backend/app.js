const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const indexRouter = require("./routes/index");

require("dotenv").config();

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use("/api", indexRouter);

const mongoURI = `mongodb://localhost:27017/noona-todo-app`;
// const mongoURI = process.env.MONGODB_URI_PROD;

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("mongoose connected");
  })
  .catch((err) => {
    console.log("DB connection fail :: ", err);
  });

app.listen(5000, () => {
  console.log("server on 5000");
});
