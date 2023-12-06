const vetSchema = require("../models/vet");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const found = await vetSchema.findOne({ email });
    if (found) {
      return res.json({
        msg: "This vet is already existant , please login !",
      });
    }
    const newVet = await new vetSchema(req.body);
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);

    newVet.password = hash;
    newVet.save();
    res
      .status(200)
      .json({ msg: "you are registered ! Welcome between us !", newvet });
  } catch (err) {
    console.log(err);
  }
};

exports.login = async (req, res) => {
  try {
    const { password, email } = req.body;
    const found = await vetSchema.findOne({ email });
    if (!found) {
      return res.json({ msg: "Email not found ! Please verify or register !" });
    }
    const match = bcrypt.compare(password, found.password);
    if (!match) {
      return res.json({ msg: "Incorrect Password !" });
    }
    const payload = { id: found._id };
    var token = jwt.sign(payload, process.env.privateKey);
    res.json({ msg: "Welcome back !", found, token });
  } catch (err) {
    console.log(err);
  }
};
exports.getAllVet = async (req, res) => {
  try {
    const users = await vetSchema.find();
    res.status(200).json({ msg: "you get all the users", users });
  } catch (error) {
    console.error(error);
  }
};
