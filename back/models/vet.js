const mongoose = require("mongoose");

const vetSchema = mongoose.Schema({
  photo: {
    type: String,
    default:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGz-VYChmB0xBG5FHdLmZQe-CFiydR1ksIVousl32RYTnSIF1GAlSi-FbSqKm_6vEbI-g&usqp=CAU",
  },
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  numordre: {
    type: String,
    required: true,
  },
  tel: {
    type: String,
    required: true,
  },
  cabAdresse: String,
  description: String,
  services: String,
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "vet",
  },
});

module.exports = mongoose.model("vetSchema", vetSchema);
