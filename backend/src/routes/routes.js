const express = require("express");
const bookRoutes = express();
const userController = require("../controllers/userController");

bookRoutes.post("/login", userController.login);
bookRoutes.post("/register", userController.register);
module.exports = bookRoutes;
