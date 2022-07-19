import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import apiRequest from "../apiCalls/apiRequest";
import Header from "../components/header";

const EditBook = () => {
  const [name, setName] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [availableBooks, setAvailableBooks] = useState(0);
  const [image, setImage] = useState(null);
  const location= useLocation()
 

  useEffect(()=>{
    setName(location.state?.book.book_name)
    setAuthorName(location.state?.book.author_name)
    setAvailableBooks(location.state?.book.total_books)
  },[location])
  const handleEditBookClick = async () => {
    const token = localStorage.getItem("token");
    let formData = new FormData();
    formData.append("book_cover", image, image.name);
    formData.append("user_id", localStorage.getItem("user_id"));
    formData.append("book_name", name);
    formData.append("author_name", authorName);
    formData.append("total_books", availableBooks);
    formData.append("book_id", location.state?.book._id)

    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bareer ${token}`,
      },
      body: formData,
    };
    const response = await fetch("http://localhost:3001/editBook", options);
    console.log(response.json());
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
          <button type={"button"} onClick={handleEditBookClick}>
            EditBook
          </button>
        </form>
      </div>
    </div>
  );
};
export default EditBook;
