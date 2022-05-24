const express = require("express");
const router = express.Router();
const User = require("../model/user.model");
const { body, validationResult } = require("express-validator");

router.post(
  "/signup",

  body("firstName").notEmpty().withMessage(" required"),
  body("lastName").notEmpty().withMessage(" required"),

  body("phoneNumber")
    .notEmpty()
    .isLength(10)
    .withMessage(" required and should be exactly 10 numbers"),

  body("email")
    .custom(async (value) => {
      const isEmail = /^\w+@[a-zA-z_]+?\.[a-zA-Z]{2,20}$/.test(value);
      const userEmail = await User.findOne({ email: value }).lean().exec();

      if (!isEmail) {
        throw new Error("required and should be a valid email");
      }
      if (userEmail) {
        throw new Error("email is already exist");
      }
      return true;
    })
    .notEmpty(),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      let newerrors = errors.array().map(({ msg, param, location }) => {
        return {
          [param]: msg,
        };
      });
      return res.status(400).json({ errors: newerrors });
    }

    try {
      const user = await User.create(req.body);
      return res.status(201).send(user);
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Inernal server error", status: "failed" });
    }
  }
);

router.post(
  "/login",

  body("email")
    .custom(async (value) => {
      const isEmail = /^\w+@[a-zA-z_]+?\.[a-zA-Z]{2,20}$/.test(value);
      const userEmail = await User.findOne({ email: value }).lean().exec();

      if (!isEmail) {
        throw new Error("required and should be a valid email");
      }
      if (userEmail) {
        throw new Error("email is already exist");
      }
      return true;
    })
    .notEmpty(),

  body("password")
    .notEmpty()
    .isLength(10)
    .withMessage(" required and should be exactly 10 numbers"),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      let newerrors = errors.array().map(({ msg, param, location }) => {
        return {
          [param]: msg,
        };
      });
      return res.status(400).json({ errors: newerrors });
    }

    try {
      const user = await User.findOne({
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
      });

      if (!user) {
        return res
          .status(401)
          .json({
            status: "failed",
            message: "your email password is not correct",
          });
      }

      return res.status(201).send(user);
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Inernal server error", status: "failed" });
    }
  }
);

module.exports = router;
