const mongoose = require("mongoose");

const clientSchema = mongoose.Schema({
  photo: {
    type: String,
    default:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk-DIhTXiFKfP16gOLcWSeLf-Dn6lV-wDrD0sG4C4GY3PT4g9DQTV8V7SF6OBYXz6Jt2I&usqp=CAU",
  },
  name: {
    type: String,
  },
  lastName: {
    type: String,
  },
  age: {
    type: String,
  },
  tel: {
    type: String,
  },
  Adresse: {
    type: String,
  },
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
    default: "client",
  },
});

module.exports = mongoose.model("Client", clientSchema);
