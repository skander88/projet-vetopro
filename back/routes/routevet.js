const express = require("express");
const vetRoute = express.Router();
const { register, login } = require("../controllers/vetControllers");
const { isAuth } = require("../middlewares/vetAuth");
const vetSchema = require("../models/vet");
const {
  registerValidation,
  loginValidation,
  validation,
} = require("../middlewares/registerValidation");

//localhost:4000/authvet/registerVet
vetRoute.post("/registerVet", registerValidation, validation, register);
// http://localhost:4000/authvet/loginVet
vetRoute.post("/loginVet", loginValidation, validation, login);
// http://localhost:4000/authvet/myAccountVet
vetRoute.get("/myAccountVet", isAuth, (req, res) => {
  res.send(req.vet);
  console.log(req.vet);
});
//route update vet
//http://localhost:4000/vet/updatevet/:id
vetRoute.put("/updatevet/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedvet = await vetSchema.findByIdAndUpdate(id, {
      $set: { ...req.body },
    });
    res.status(200).json({ msg: "you updated your vet :", updatedvet });
  } catch (err) {
    console.log(err);
    res.send("we got a problem");
  }
});
// http://localhost:4000/authvet/Veterinaires
vetRoute.get("/Veterinaires", async (req, res) => {
  try {
    const users = await vetSchema.find();
    res.status(200).json({ msg: "you get all the vets", users });
  } catch (error) {
    console.error(error);
  }
});

module.exports = vetRoute;
