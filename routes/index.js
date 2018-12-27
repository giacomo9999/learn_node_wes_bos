const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("hello", {
    name: "Jim",
    dog: req.query.dog
  });
});

module.exports = router;
