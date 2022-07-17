const userModel = require("../models/userModels");
const isAuthenticatedWithToken = (req, res, next) => {
  console.log(req.headers);
  next();
};
module.exports = { isAuthenticatedWithToken };
