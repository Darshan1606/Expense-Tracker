const jwt = require("jsonwebtoken");

const AuthMiddleware = {
  authenticateToken: (req, res, next) => {
    const token = req.headers["token"];
    console.log("token", token);

    if (token == null)
      return res.json({
        success: false,
        isAuth: false,
        message: "Token not found",
      });

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
      console.log("erriiii", err);
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

module.exports = AuthMiddleware;
