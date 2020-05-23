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

//@router POST api/items
//@desc create a post
//@access Public

router.post("/", (req, res) => {
  const newItem = new Item({
    name: req.body.name,
  });

  newItem.save().then((item) => res.json(item)); //go over this line
});

module.exports = router;
