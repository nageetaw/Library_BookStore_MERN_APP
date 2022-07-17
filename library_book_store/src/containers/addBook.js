import Header from "../components/header";

const AddBook = () => {
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
          <input placeholder="book name" type={"text"} />
          <input placeholder="author name" type={"text"} />
          <input placeholder="available books" type={"number"} />
          <input type={"file"} placeholder="book image" />
          <button>AddBook</button>
        </form>
      </div>
    </div>
  );
};
export default AddBook;
