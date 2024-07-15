const User = require("../models/User");

const signIn = async (req, res) => {
  const user = await User.findOne(req.body);
  if (user) res.redirect("/");
  else res.render("sign-in", { message: "Invalid Credentials" });
};

const signUpPost = async (req, res) => {
  await User.create(req.body);
  res.redirect("/");
};

module.exports = { signIn, signUpPost };
