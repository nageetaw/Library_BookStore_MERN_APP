const express = require("express");
const dotenv = require("dotenv").config();
const bookRoutes = require("./src/routes/routes");
const cors = require("cors");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3002;
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", bookRoutes);

app.listen(PORT, () => {
  console.log("app is running on port " + PORT);
});
