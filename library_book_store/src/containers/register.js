import Header from "../components/header";

const Register = () => {
  return (
    <div>
      {" "}
      <Header />{" "}
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
          <input placeholder="name" type={"text"} />
          <input placeholder="email" type={"email"} />
          <input placeholder="Password" type={"password"} />
          <button>Register</button>
        </form>
      </div>
    </div>
  );
};
export default Register;
