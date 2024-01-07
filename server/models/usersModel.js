const mongoose = require("mongoose");
const Joi = require("joi");
const {config} = require("../config/secret")
const jwt = require("jsonwebtoken")
require("dotenv").config();

const Schema = new mongoose.Schema(
  {
    name: String,
    password:String,
    id: Number,
    role: String,
  },
  { timestamps: true }
);

exports.UsersModel = mongoose.model("users", Schema);

exports.validUsers = (reqBody) => {
  const joiSchema = Joi.object({
    name: Joi.string().min(4).max(14).required(),
    password: Joi.string().min(4).max(14).required(),
    id: Joi.number().min(7).required(),
    role: Joi.string().min(2).max(10),
  });
  return joiSchema.validate(reqBody);
};

exports.validLogin = (reqBody) => {
  const joiSchema = Joi.object({
    name: Joi.string().min(4).max(14).required(),
    password: Joi.string().min(4).max(14).required(),
  });
  return joiSchema.validate(reqBody);
};

exports.createToken = (user_id, role = "user") => {
  const token = jwt.sign(
    {_id:user_id, role},
    config.TOKEN_SECRET,
    {expiresIn:"400mins"})
  return {token,role};
}

exports.createTokenAdmin = (user_id, role = "admin") => {
  const token = jwt.sign(
    {_id:user_id, role},
   "picassoSecret",
    {expiresIn:"400mins"})
  return {token,role};
}
