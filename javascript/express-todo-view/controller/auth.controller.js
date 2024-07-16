const User = require("../models/User");
const bcryptjs = require("bcryptjs");



const signInPage = (req, res) => res.render("sign-in", { message: null });

const signIn = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  const { password, ...rest } = user;
  if (!user) {
    res.render("sign-in", { message: "Invalid Credentials" });
    return;
  }
  const userHashedPassword = user.password;
  const passswordIsCorrect = bcryptjs.compareSync(
    req.body.password,
    userHashedPassword
  );
  if (passswordIsCorrect) res.redirect("/");
  else res.render("sign-in", { message: "Invalid Credentials" });
};


const signUpPage = (req, res) => res.render("sign-up");

const signUpPost = async (req, res) => {
  const { password, ...rest } = await req.body;
  var salt = bcryptjs.genSaltSync(10);
  var hashedPassword = bcryptjs.hashSync(password, salt);
  User.create({ password: hashedPassword, ...rest });
  res.redirect("/");
};

module.exports = { signInPage, signUpPage, signIn, signUpPost };
