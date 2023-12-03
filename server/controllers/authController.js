const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { findUser, createUser } = require("../services/userService");

const AuthController = {
  signUp: async (req, res, next) => {
    try {
      let user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        mobile_number: req.body.mobile_number,
        role: req.body.role,
      };

      let existUser = await findUser({ email: user.email });

      if (existUser) {
        return res.json({
          success: false,
          message: "User Already Exists",
        });
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(user.password, salt);
      user.password = hashedPassword;

      const newUser = await createUser(user);
      await newUser.save();

      res.json({
        success: true,
        message: "user sign up successfully",
        data: newUser,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  login: async (req, res, next) => {
    try {
      const user = {
        email: req.body.email,
        password: req.body.password,
      };

      let existUser = await findUser({ email: user.email });

      if (!existUser) {
        return res.json({
          success: false,
          message: "User Not Found",
        });
      }

      const passwordMatch = await bcrypt.compare(
        user.password,
        existUser.password
      );

      const accessToken = jwt.sign(user, process.env.JWT_SECRET_KEY, {
        expiresIn: "2h",
      });

      if (passwordMatch) {
        res.json({
          success: true,
          isAuth: true,
          message: "logged in successfully",
          token: accessToken,
          result: {
            id: existUser._id,
            name: existUser.name,
            email: existUser.email,
            mobile_number: existUser.mobile_number,
            role: existUser.role,
          },
        });
      } else {
        res.status(401).json({ message: "Invalid username or password" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = AuthController;
