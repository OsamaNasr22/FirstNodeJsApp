var express = require('express');
var router = express.Router()
var CartController = require('../controllers/cart')




router.get('/add-to-shopping-cart/:id', CartController.addItemToCart)
router.get('/',CartController.getCart);



module.exports = router;
