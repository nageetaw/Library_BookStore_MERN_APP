const express = require("express");
const bookRoutes = express();
const userController = require("../controllers/userController");
const bookController = require("../controllers/bookController");
const authMiddleWare = require("../middlewares/authenticationMiddleWare");
bookRoutes.post("/login", userController.login);
bookRoutes.post("/register", userController.register);
bookRoutes.post(
  "/addBook",
  authMiddleWare.isAuthenticatedWithToken,
  bookController.addBook
);
bookRoutes.post("/deleteBook", bookController.deleteBook);
bookRoutes.post("/editBook", bookController.editBook);
bookRoutes.get("/getBooks", bookController.getBooks);

module.exports = bookRoutes;
