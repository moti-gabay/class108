const express = require("express");
const router = express.Router();
const {config} = require("../config/secret")
const { default: mongoose } = require("mongoose");
const jwt = require("jsonwebtoken");
const { auth, authAdmin } = require("../middlewares/auth");
const {
  UsersModel,
  validUsers,
  validLogin,
  createTokenAdmin,
} = require("../models/usersModel");
const bcrypt = require("bcrypt");
router.get("/", async (req, res) => {
  res.json({ msg: "Express users work" });
});

router.get("/userInfo", auth, async (req, res) => {
  try {
    const user = await UsersModel.findOne({ _id: req.tokenData._id });
    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(502).json({ err });
  }
});
router.get("/checkToken", auth, (req, res) => {
  res.json({ status: true });
});
router.get("/usersList", authAdmin, async (req, res) => {
  try {
    const data = await UsersModel.find({});
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(502).json({ err });
  }
});

router.get("/checkAdminToken", authAdmin, (req, res) => {
  res.json({ status: true });
});
router.post("/" ,async (req, res) => {
  const validBody = validUsers(req.body);
  if (validBody.error) {
    return res.status(400).json(validBody.error.details);
  }
  try {
    const user = new UsersModel(req.body);
    user.password = await bcrypt.hash(user.password, 10);
    user.password = "******";
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    if (err.code == 11000) {
      return res
        .status(401)
        .json({ err: "user already in system", code: 11000 });
    }
    console.log(err);
    res.status(502).json({ err });
  }
});

router.post("/login", async (req, res) => {
  const validBody = validLogin(req.body);
  if (validBody.error) {
    return res.status(400).json(validBody.error.details);
  }
  try {
    const user = await UsersModel.findOne({
      name: req.body.name,
    });
    if (!user) {
      return res.status(401).json({ msg: "user not found" });
    }
    const isValidatePassword = bcrypt.compare(req.body.password, user.password);
    if (!isValidatePassword) {
      return res.status(401).send("Invalid Password!");
    }
    if (user) {
      const token = createTokenAdmin(user._id, user.role);
      res.json({ token, role: user.role });
    }
  } catch (err) {
    console.log(err);
    res.status(502).json({ err });
  }
});

router.delete("/:id", authAdmin,async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid user ID" });
    }

    if (id === req.tokenData._id) {
      return res.status(401).json({ error: "You can't delete yourself" });
    }

    const result = await UsersModel.deleteOne({ _id: id });

    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(204).json({ result }).end();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
