const express = require("express");
const router = express.Router();
const  {LinksModel,validLinks} = require("../models/linksModel");
const { authAdmin } = require("../middlewares/auth");


router.get("/linkInfo/:id", async(req,res) => {
  const {id} = req.params;
  try {
    const link = await LinksModel.findOne({ _id: id },{__v:0})
    res.json( link )
} catch (error) {
    console.log(error);
    res.status(502).json({msg_err:error});
}
  })

  router.get("/linksList", async(req,res) => {
    try{
      const links = await LinksModel.find({},{__v:0})
      res.status(201).json(links)
    }
    catch(err){
      console.log(err);
      res.status(502).json({err})
    }
  })

  router.post("/addLink",authAdmin,async(req,res) => {
    const validBody = validLinks(req.body)
    if(validBody.error){
      return res.status(400).json(validBody.error.details)
    }
    try{
      const link = await LinksModel.create(req.body);
      res.status(201).json(link)
    }
    catch(err){
      console.log(err);
      res.status(502).json({err})
    }
  })

  router.put("/:id",authAdmin,async(req,res) => {
    const {id} = req.params;
    const validBody = validLinks(req.body);
    if(validBody.error){
      return res.status(400).json(validBody.error.details)
    }
    try{
      const data = await LinksModel.updateOne({_id:id},req.body)
      return res.status(201).json(data)
    }
    catch(err){
      console.log(err);
      res.status(502).json({err})
    }
  })

  router.delete("/:id",authAdmin, async (req, res) => {
    const { id } = req.params;
    try {
      const data = await LinksModel.deleteOne({ _id: id });
      res.status(201).json(data);
    } catch (err) {
      console.log(err);
      res.status(502).json({ err });
    }
  });

  module.exports = router;