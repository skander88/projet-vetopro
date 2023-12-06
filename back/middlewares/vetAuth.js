var jwt = require("jsonwebtoken");

const vetSchema = require("../models/vet");

exports.isAuth = async (req, res, next) => {
  try {
    const token = req.header("Authorization");

    var decoder = jwt.verify(token, process.env.privateKey);

    if (!decoder) {
      return res.status(404).json({ msg: "cannot enter" });
    }

    const vet = await vetSchema.findById(decoder.id);
    req.vet = vet;

    next();
  } catch (err) {
    console.log(err);
  }
};
