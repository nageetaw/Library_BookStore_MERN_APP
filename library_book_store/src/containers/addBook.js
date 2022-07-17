import { useState } from "react";
import apiRequest from "../apiCalls/apiRequest";
import Header from "../components/header";

const AddBook = () => {
  const [name, setName] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [availableBooks, setAvailableBooks] = useState(0);
  const [image, setImage] = useState(null);
  const handleAddBookClick = async () => {
    const token = localStorage.getItem("token");
    let formData = new FormData();
    formData.append("book_cover", image, image.name);
    formData.append("user_id", localStorage.getItem("user_id"));
    formData.append("book_name", name);
    formData.append("author_name", authorName);
    formData.append("total_books", availableBooks);

    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    };
    const response = await fetch("http://localhost:3001/addBook", options);
    console.log(response);
  };
  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          alignSelf: "center",
          justifySelf: "center",
          width: "100%",
          height: "auto",
        }}
      >
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            border: "solid 3px gray",

            width: "30%",
            height: 200,
            padding: "20px",
            margin: "auto",
          }}
        >
          <input
            placeholder="book name"
            type={"text"}
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
          <input
            placeholder="author name"
            type={"text"}
            value={authorName}
            onChange={({ target }) => setAuthorName(target.value)}
          />
          <input
            placeholder="available books"
            type={"number"}
            value={availableBooks}
            onChange={({ target }) => setAvailableBooks(target.value)}
          />
          <input
            type={"file"}
            multiple={false}
            placeholder="book image"
            onChange={({ target }) => {
              setImage(target.files[0]);
            }}
          />
          <button type={"button"} onClick={handleAddBookClick}>
            AddBook
          </button>
        </form>
      </div>
    </div>
  );
};
export default AddBook;
