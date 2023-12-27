const mongoose = require("mongoose");
const Joi = require("joi");

const Schema = new mongoose.Schema(
  {
    name: String,
    id: Number,
    role: String,
  },
  { timestamps: true }
);

exports.UsersModel = mongoose.model("users", Schema);

exports.validUsers = (reqBody) => {
  const joiSchema = Joi.object({
    name: Joi.string().min(4).required(),
    id: Joi.number().min(7).required(),
    role: Joi.string().min(2).max(10),
  });
  return joiSchema.validate(reqBody);
};
