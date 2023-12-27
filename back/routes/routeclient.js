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
// http://localhost:4000/authclient/loginClient
clientRoute.post("/loginClient", loginValidation, validation, login);
// http://localhost:4000/authclient/myAccountClient
clientRoute.get("/myAccountClient", isAuth, (req, res) => {
  res.send(req.client);
  console.log(req.client);
});
//route update client
//http://localhost:4000/client/updateclient/:id
clientRoute.put("/updateclient/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedclient = await clientSchema.findByIdAndUpdate(id, {
      $set: { ...req.body },
    });
    res.status(200).json({ msg: "you updated your client :", updatedclient });
  } catch (err) {
    console.log(err);
    res.send("we got a problem");
  }
});
// http://localhost:4000/authclient/clients
clientRoute.get("/clients", getAllclients);

module.exports = clientRoute;
