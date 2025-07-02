const express = require("express");
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");
const router = express.Router();

// 회원가입
router.post("/", userController.createUser);

// 토큰이 valid한 토큰인지, 이 token을 가지고 유저를 찾아서 리턴
router.get("/me", authController.authenticate, userController.getUser);

module.exports = router;
