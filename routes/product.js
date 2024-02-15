const express = require("express");
const router = express.Router();

const {
  getProductFromId,
  getAllProducts,
} = require("../controllers/product.js");

// Base URL is `/product`
router.get("/all", getAllProducts);

router.get("/:id", getProductFromId);

module.exports = router;
