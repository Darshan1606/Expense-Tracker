const jwt = require("jsonwebtoken");

module.exports = {
  authenticateToken: (req, res, next) => {
    const token = req.headers["token"];

    if (token == null)
      return res.json({
        success: false,
        isAuth: false,
        message: "Token not found",
      });

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
      console.log("err", err);
      console.log("user", user);

      if (err) {
        return res.json({
          success: false,
          isAuth: false,
          message: "Token is expired or Invalid token",
        });
      }

      req.user = user;
      next();
    });
  },
};
