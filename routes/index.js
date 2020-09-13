var express = require('express');
var router = express.Router();
var product = require('../models/product');
/* GET home page. */
router.get('/',  async function(req, res, next) {
  var products = await product.find().lean().exec();
  // var chucnksProducts = [];
  //
  // var chunk =3;
  // for (var i=0, c= products.length; i<c ; i+=chunk){
  //   chucnksProducts.push(products.slice(i , i + chunk))
  // }
  // console.log(chucnksProducts)
  res.render('shop/index', { title: 'Express',products: products });
});

module.exports = router;
