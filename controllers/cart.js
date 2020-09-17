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

var getCart = (req, res) => {
    var oldCart = req.session.cart;
    if (!oldCart) return  res.render('./shop/cart',{products: null})

    var cart = new Cart(oldCart)
    return res.render('./shop/cart',{products: cart.serializeToArray(), totalPrice: cart.totalPrice})
}


module.exports = {addItemToCart, getCart}
