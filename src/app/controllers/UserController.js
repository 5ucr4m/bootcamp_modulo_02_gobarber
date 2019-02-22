const { User } = require("../models");

class UserController {
  create(req, res) {
    return res.render("auth/signup");
  }
  async store(req, res) {
    const { filename: avatar } = req.file;
    try {
      await User.create({ ...req.body, avatar });
      return res.redirect("/");
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new UserController();
