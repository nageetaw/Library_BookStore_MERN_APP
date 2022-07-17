const bookModel = require("../models/bookModels");
const userModel = require("../models/userModels");
const addBook = (req, res, next) => {
  const { book_name, author_name, total_books, user_id } = req.body;
  const { book_cover } = req.files;

  const newBook = new bookModel({
    book_name,
    author_name,
    total_books,
    book_cover: book_cover.name,
    user_id,
  });
  newBook
    .save()
    .then((onSave) => {
      console.log("onsave", onSave);
    })
    .catch((onerror) => {
      console.log("onError", onerror);
    });

  res.send(JSON.stringify({ data: "ok ok" }));
};
module.exports = { addBook };
