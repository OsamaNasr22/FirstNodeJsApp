var mongoose = require('mongoose');
var bcrypt = require('bcrypt')

var user = new mongoose.Schema({
    email : {type: String, required: true, unique: true},
    password : {type: String, required: true}
});

user.methods.bcryptUserPassword= async function (password){
    var hash = await bcrypt.hash(password, 10);
    return hash;
}

user.methods.checkIfPasswordIsValid = async function(password){
    var match = await bcrypt.compare(password, this.password);
    return match;
}

module.exports = mongoose.model('User',user);
