var jwt = require("jsonwebtoken");

const clientSchema = require("../models/client");

exports.isAuth = async (req, res, next) => {
  try {
    const token = req.header("Authorization");
    console.log("token :", token);

    var decoder = jwt.verify(token, process.env.privateKey);

    if (!decoder) {
      return res.status(404).json({ msg: "cannot enter" });
    }

    const client = await clientSchema.findById(decoder.id);
    req.client = client;

    next();
  } catch (err) {
    console.log(err);
  }
};
