const clientSchema = require("../models/client");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const found = await clientSchema.findOne({ email });
    if (found) {
      return res.json({
        msg: "This client is already existant , please login !",
      });
    }
    const newClient = await new clientSchema(req.body);
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);

    newClient.password = hash;
    newClient.save();
    res
      .status(200)
      .json({ msg: "you are registered ! Welcome between us !", newClient });
  } catch (err) {
    console.log(err);
  }
};

exports.login = async (req, res) => {
  try {
    const { password, email } = req.body;
    const found = await clientSchema.findOne({ email });
    await console.log(found);
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
exports.getAllclients = async (req, res) => {
  try {
    const users = await clientSchema.find();
    res.status(200).json({ msg: "you get all the users", users });
  } catch (error) {
    console.error(error);
  }
};
