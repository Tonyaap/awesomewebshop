const { Router } = require("express");
const Category = require("../models").category;
const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const categories = await Category.findAll();

    res.json(categories);
  } catch (e) {
    next(e);
  }
});
module.exports = router;
