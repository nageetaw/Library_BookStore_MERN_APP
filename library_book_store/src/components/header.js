import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <nav
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-around",
          paddingTop: "20px",
          paddingBottom: "20px",
          backgroundColor: "lightcyan",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/addBook">Add Book</Link>
        <Link to="/viewBooks">View Books</Link>
      </nav>
    </div>
  );
};

export default Header;
