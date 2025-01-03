const jwt = require("jsonwebtoken");

const newAccessToken = (id) => {
  const token = jwt.sign({ userId: id }, process.env.MY_SECRET_KEY, {
    expiresIn: "1d",
  });

  return token;
};

module.exports = {
  newAccessToken,
};