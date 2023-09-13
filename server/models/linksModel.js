const mongoose = require("mongoose");
const Joi = require("joi");


const Schema = new mongoose.Schema(
    {
      name: String,
      url:String
    }
  );


  exports.LinksModel = mongoose.model("links", Schema);

  exports.validLinks = (reqBody) => {
    const joiSchema = Joi.object({
      name: Joi.string().min(2).max(50).required(),
      url: Joi.string().min(2).max(999).required(),
    });
    return joiSchema.validate(reqBody);
  };