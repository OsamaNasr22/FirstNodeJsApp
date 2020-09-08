var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var product = new Schema({
    title : {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {type: String, required: true},
    price: {type: Number, required: true}
});

module.exports = mongoose.model('Product', product);
