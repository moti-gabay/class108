const express = require("express");
const router = express.Router();
const { categoryModel, validCategory } = require("../models/categoryModel");

router.get("/", async (req, res) => {
  res.json({ msg: "Express homepage category" });
});

router.get("/categoryList", async (req, res) => {
  try {
    const categories = await categoryModel.find({}, { __v: 0 });
    res.status(201).json(categories);
  } catch (err) {
    console.log(err);
    res.status(502).json({ err });
  }
});

router.post("/addCategory", async (req, res) => {
  const validBody = validCategory(req.body);
  if (validBody.error) {
    return res.status(400).json(validBody.error.details);
  }
  try {
    const category = await categoryModel.create(req.body);
    res.status(201).json(category);
  } catch (err) {
    console.log(err);
    res.status(502).json({ err });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await categoryModel.deleteOne({ _id: id });
    return res.status(201).json(data);
  } catch (err) {
    console.log(err);
    res.status(502).json({ err });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const validBody = validCategory(req.body);
  if (validBody.error) {
    return res.status(400).json(validBody.error.details);
  }
  try {
    const data = await categoryModel.updateOne({ _id: id },req.body);
     res.status(201).json(data);
  } catch (err) {
    console.log(err);
    res.status(502).json({ err });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await categoryModel.deleteOne({ _id: id });
    res.status(201).json(data);
  } catch (err) {
    console.log(err);
    res.status(502).json({ err });
  }
});

module.exports = router;
