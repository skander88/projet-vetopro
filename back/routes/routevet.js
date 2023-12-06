const express = require("express");
const vetRoute = express.Router();
const { register, login } = require("../controllers/vetControllers");
const { isAuth } = require("../middlewares/vetAuth");
const {
  registerValidation,
  loginValidation,
  validation,
  getAllVet,
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
// http://localhost:4000/authvet/Veterinaires
vetRoute.get("/Veterinaires", getAllVet);

module.exports = vetRoute;
