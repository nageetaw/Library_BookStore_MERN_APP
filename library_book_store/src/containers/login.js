import { useState } from "react";
import apiRequest from "../apiCalls/apiRequest";
import Header from "../components/header";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLoginClick = () => {
    apiRequest("login", "post", "JSON", { email, password }, "abc");
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
          <button onClick={handleLoginClick} type={"button"}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
