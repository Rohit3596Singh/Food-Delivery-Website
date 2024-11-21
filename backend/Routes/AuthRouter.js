const { signup } = require("../Controller/AuthController");
const { signupValidation } = require("../middlewares/AuthValidation");

const { login } = require("../Controller/AuthController");
const { loginValidation } = require("../middlewares/AuthValidation");

// const router = require("express").Router;

const express = require('express');
const router = express.Router();


router.post("/login",loginValidation,login)
router.post("/signup",signupValidation,signup)

module.exports = router;