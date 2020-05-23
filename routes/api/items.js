const express = require("express");
const router = express.Router();

//item model
const Item = require("../../models/Item");

//@router GET api/items
//@desc Get all items
//@access Public

router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 }) //this line to sort by date
    .then((items) => res.json(items));
});

module.exports = router;
