const mongoose = require("mongoose");
const { Joi } = require("joi")
const picassoSchema = new mongoose.Schema({
  name:String,
  url:String,
});

exports.PicassoModel = mongoose.model("picasso",picassoSchema);

exports.validPicasso = (reqBody) => {
    const joiSchema = Joi.object({
      name:Joi.string().min(2).max(100).required(),
      url:Joi.string().min(3).max(9999).required()
    })
    return joiSchema.validate(reqBody);
} 