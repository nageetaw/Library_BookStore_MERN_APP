import { useState } from "react";
import apiRequest from "../apiCalls/apiRequest";
import Header from "../components/header";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleRegisterClick = () => {
    apiRequest("register", "post", "json", { name, email, password }, "token");
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
            placeholder="name"
            type={"text"}
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <input
            placeholder="email"
            type={"email"}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            placeholder="Password"
            type={"password"}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button type={"button"} onClick={handleRegisterClick}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
};
export default Register;
