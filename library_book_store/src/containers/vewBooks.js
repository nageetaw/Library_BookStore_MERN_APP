import Header from "../components/header";

const ViewBooks = () => {
  return (
    <div style={{ width: "100%" }}>
      <Header />
      <table border={"solid 2px"} style={{ margin: "auto", padding: 10 }}>
        <thead>
          <th>Book name</th>
          <th>Author name</th>
          <th>Available books</th>
          <th>Book image</th>
          <th>Edit</th>
          <th>Delete</th>
        </thead>
        <tbody>
          <tr>
            <td>Book name</td>
            <td>Author name</td>
            <td>Available books</td>
            <td>
              <image src="..." height={100} width={100}></image>
            </td>
            <td>
              <button style={{ color: "blue" }}>Edit</button>
            </td>
            <td>
              <button style={{ color: "red" }}>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ViewBooks;
