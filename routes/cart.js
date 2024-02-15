const express = require('express');
const { validateToken } = require('../helpers/jwtToken');
const { addItemToCart, getCartItems } = require('../controllers/cart');
const router = express.Router();

router.post('/', validateToken, getCartItems);
router.post('/addItem', validateToken, addItemToCart);

module.exports = router;