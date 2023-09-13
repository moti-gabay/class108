const mongoose = require("mongoose");
const Joi = require("joi");

const Schema = new mongoose.Schema(
    {
      name: String,
    }
  );

  exports.categoryModel = mongoose.model("categories", Schema);

  exports.validCategory = (reqBody) => {
    const joiSchema = Joi.object({
      name: Joi.string().min(2).max(50).required(),
         });
    return joiSchema.validate(reqBody);
  };