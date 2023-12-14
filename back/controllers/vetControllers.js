const vetSchema = require("../models/vet");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const { name, email, password, tel, numordre, age } = req.body;
    // Check if tel, numordre, age are present and not empty

    if (!tel || !numordre || !age) {
      return res
        .status(400)
        .json({ msg: "Tel, numordre, and age are required" });
    }

    const found = await vetSchema.findOne({ email });
    if (found) {
      return res.json({
        msg: "This vet is already existent, please login!",
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
      .json({ msg: "You are registered! Welcome between us!", newVet }); // Use newVet instead of newvet
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

exports.login = async (req, res) => {
  try {
    const { password, email } = req.body;
    const found = await vetSchema.findOne({ email });
    if (!found) {
      return res.json({ msg: "Email not found! Please verify or register!" });
    }
    const match = bcrypt.compareSync(password, found.password); // Use compareSync
    if (!match) {
      return res.json({ msg: "Incorrect Password!" });
    }
    const payload = { id: found._id };
    const token = jwt.sign(payload, process.env.privateKey); // Ensure privateKey is properly configured
    res.json({ msg: "Welcome back!", found, token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};
