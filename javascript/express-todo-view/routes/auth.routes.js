const express = require("express");
const authController = require("../controller/auth.controller");
const router = express.Router();

router.get("/sign-up", authController.signUpPage);
router.get("/sign-in", authController.signInPage);
router.post("/sign-up", authController.signUpPost);
router.post("/sign-in", authController.signIn);

module.exports = router;