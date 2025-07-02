/**
 * https://expressjs.com/ko/starter/installing.html
 * https://expressjs.com/ko/guide/writing-middleware.html
 */

const express = require("express");
const app = express();

// const token = null;
const token = "adfdf";

// http://localhost:5000/
app.get("/", (req, res) => {
  console.log("Hello World!");
  res.send("Hello World!");
});

// http://localhost:5000/users
const checkAuth = (req, res, next) => {
  console.log("she has admin permission");
  next();
};
const checkToken = (req, res, next) => {
  if (token) {
    console.log("You already have token.");
    next();
  } else {
    res.send("You dont have token");
  }
};
const getUser = (req, res) => {
  console.log("Here is user info"); // 터미널
  res.send("Here is user info"); // 화면
};
app.get("/users", checkAuth, checkToken, getUser);

app.listen(5000, () => {
  console.log("server is on 5000");
});
