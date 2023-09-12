const mongoose = require("mongoose");
const { Joi } = require("joi");

const Schema = new mongoose.Schema({
  name: String,
});

exports.CategoryModel = mongoose.model("categories", Schema);

exports.validCategory = (reqBody) => {
 const joiSchema = Joi.object({
  name:string().min(2).max(100).required(),
 })
  return joiSchema.validate(reqBody);
};
