const express = require("express");
const Beard = require("../models/Beard.model");
const router = express.Router();
router.get("", async (req, res) => {
  try {
    const beard  = await Beard.find().lean().exec();
    return res.status(200).send(beard);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const beard  = await Beard.findById(req.params.id).lean().exec();
    return res.status(200).send(beard);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});


router.post("", async (req, res) => {
  try {
    const beard = await Beard.create(req.body);
    return res.status(200).send(beard);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
