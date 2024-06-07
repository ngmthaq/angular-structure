const express = require("express");
const isHuman = require("../middlewares/isHuman");
const router = express.Router();

router.use(isHuman);

router.get("/", function (req, res, next) {
  return res.render("home");
});

module.exports = router;
