const express = require("express");
const app = express();
const cors = require("cors");
const port = 4000;
const connectdb = require("./config/connectdb");
const clientRoute = require("./routes/routeclient");
const vetRoute = require("./routes/routevet");
const annonceRouter = require("./routes/routeAnnonce");

require("dotenv").config();

app.use(cors());
app.use(express.json());

connectdb();

app.use("/authvet", vetRoute);
app.use("/authclient", clientRoute);
app.use("/annonce", annonceRouter);

app.listen(port, (err) => {
  err ? console.log(err) : console.log(`go to port : ${port} `);
});
