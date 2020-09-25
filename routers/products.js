const { Router } = require("express");
const Product = require("../models").product;
const router = new Router();

console.log(Product.findAll());

router.get("/", async (req, res, next) => {
  try {
    const products = await Product.findAll();
    console.log(products);

    res.json(products);
  } catch (e) {
    next(e);
  }
});
module.exports = router;
