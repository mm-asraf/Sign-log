const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phoneNumber: { type: String, required: true, maxlength: 10 },
    email: { type: String, required: true },
    password: { type: String, required: true, minlength: 6, maxlength: 15 },
    confirmPassword: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("user", userSchema);
