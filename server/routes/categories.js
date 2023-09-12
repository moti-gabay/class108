const express = require("express");
const { CategoryModel,validCategory } = require("../models/categoryModel.js.js");
const router = express.Router();

router.get("/", async(req,res) => {
    res.json({msg:"Express homepage categories work"});

})

router.post("/addCategory",async(req,res) => {
    const validBody = validCategory(req.body);
        // if(validBody.error){
        //     return res.status(400).json(validBody.error.details);
        // }
        try {
            const category = await CategoryModel.create(req.body);
            res.status(201).json(category);
        } catch (error) {
            console.log(error);
            res.status(502).json({msg_err:error})
        }
})

module.exports = router;