const express = require("express");
const clientRoute = express.Router();
const {
  register,
  login,
  getAllclients,
} = require("../controllers/clientControllers");
const { isAuth } = require("../middlewares/clientAuth");
const {
  registerValidation,
  loginValidation,
  validation,
} = require("../middlewares/registerValidation");
// http://localhost:4000/authclient/registerClient
clientRoute.post("/registerClient", registerValidation, validation, register);
// http://localhost:4000/authclient/login
clientRoute.post("/login", loginValidation, validation, login);
// http://localhost:4000/authclient/myAccountClient
clientRoute.get("/myAccountClient", isAuth, (req, res) => {
  res.send(req.client);
  console.log(req.client);
});
// http://localhost:4000/authclient/clients
clientRoute.get("/clients", getAllclients);

module.exports = clientRoute;
