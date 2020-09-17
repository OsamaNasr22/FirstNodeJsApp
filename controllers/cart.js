var Product = require('../models/product');
var Cart = require('../models/cart');


var addItemToCart = (req, res, next) => {

    var cart = new Cart(req.session.cart? req.session.cart : {})

    Product.findById(req.params.id).exec()
        .then((product) => {
            cart.add(product,product._id)
            req.session.cart = cart;
            return res.redirect('/');
        }).catch((error) => {
        console.error(error);
         return res.redirect('/');
    })




}



module.exports = {addItemToCart}
