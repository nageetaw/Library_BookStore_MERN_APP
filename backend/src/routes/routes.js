const express = require("express");
const bookRoutes = express();
const booksController = require("../controllers/bookController");

bookRoutes.post("/login", booksController.login);
bookRoutes.post("/register", booksController.register);
module.exports = bookRoutes;
