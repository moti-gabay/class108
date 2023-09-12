const express = require("express");
const { validPicasso, PicassoModel } = require("../models/picassoModel");
const router = express.Router();

router.get("/", async(req,res) => {
  res.json({msg:"Express homepage picasso links"});
})

router.post("/addPicassoLink",async(req,res) => {
    const validBody = validPicasso(req.body);
        if(validBody.error){
            return res.status(400).json(validBody.error.details);
        }
        try {
            const PicassoLink = await PicassoModel.create(req.body);
            res.status(201).json(PicassoLink);
        } catch (error) {
            console.log(error);
            res.status(502).json({msg_err:error})
        }
})

module.exports = router;