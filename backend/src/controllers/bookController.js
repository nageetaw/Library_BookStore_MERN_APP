const login = (req, res, next) => {
  console.log("body", req.body);
  res.send(JSON.stringify({ data: "allOK" }));
};

const register = (req, res, next) => {
  console.log("body", req.body);
  res.send(JSON.stringify({ data: "allOK" }));
};
module.exports = { login, register };
