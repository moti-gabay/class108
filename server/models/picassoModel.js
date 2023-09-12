const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const { config } = require("../config/secret");

const LinksSchema = new mongoose.Schema({
  name:String,
  url:String,
});

exports.LinksModel = mongoose.model("links",LinksSchema);

exports.validLink = (reqBody) => {
    const joiSchema = Joi.object({
      name:Joi.string().min(2).max(100).required(),
      url:Joi.string().min(3).max(9999).required()
    })
    return joiSchema.validate(reqBody);
} 