const express = require("express");
const { model } = require("mongoose");
const annonceSchema = require("../models/annonce");
const annonceRouter = express.Router();

//route get all annonces
//http://localhost:4000/annonce/allAnnonces
annonceRouter.get("/allAnnonces", async (req, res) => {
  try {
    const annonce = await annonceSchema.find();
    res.status(200).json({ msg: "you get all the annonces", annonce });
  } catch (err) {
    console.log(err);
    res.send("we got a problem");
  }
});

//route post or add annonce
//http://localhost:4000/annonce/addannonce
annonceRouter.post("/addannonce", async (req, res) => {
  try {
    const newAnnonce = new annonceSchema(req.body);
    await newAnnonce.save();
    res.status(200).json({
      msg: "you added a annonce",
      annonce: newAnnonce,
    });
  } catch (err) {
    console.log(err);
    res.send("we got a problem");
  }
});

//route update annonce
//http://localhost:4000/annonce/updateannonce/:id
annonceRouter.put("/updateannonce/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedAnnonce = await annonceSchema.findByIdAndUpdate(id, {
      $set: { ...req.body },
    });
    res.status(200).json({ msg: "you updated your annonce :", updatedAnnonce });
  } catch (err) {
    console.log(err);
    res.send("we got a problem");
  }
});

//route delete annonce
//http://localhost:4000/annonce/deleteannonce/:id
annonceRouter.delete("/deleteAnnonce/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedAnnonce = await annonceSchema.findByIdAndDelete(id);
    res.status(200).json({ msg: "you deleted your annonce :", deletedAnnonce });
  } catch (err) {
    console.log(err);
    res.send("we got a problem");
  }
});

//route get unique annonce
//http://localhost:4000/annonce/getUnique/:id
annonceRouter.get("/getUnique/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const getunique = await annonceSchema.findById(id);
    res.status(200).json({ msg: "you got your annonce :", getunique });
  } catch (err) {
    console.log(err);
    res.send("we got a problem");
  }
});

module.exports = annonceRouter;
