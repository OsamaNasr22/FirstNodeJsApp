var mongoose = require('mongoose');
var Product = require('../models/product');

// var products = [
//     new Product({
//     title : 'Om kalthom' ,
//     description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
//         "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " +
//         "when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//     image: 'https://i1.sndcdn.com/artworks-000247384439-0efczv-t500x500.jpg',
//     price : 10
//     }),  new Product({
//     title : 'Om kalthom' ,
//     description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
//         "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " +
//         "when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//     image: 'https://i1.sndcdn.com/artworks-000247384439-0efczv-t500x500.jpg',
//     price : 10
//     }),  new Product({
//     title : 'Om kalthom' ,
//     description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
//         "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " +
//         "when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//     image: 'https://i1.sndcdn.com/artworks-000247384439-0efczv-t500x500.jpg',
//     price : 10
//     }),  new Product({
//     title : 'Om kalthom' ,
//     description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
//         "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " +
//         "when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//     image: 'https://i1.sndcdn.com/artworks-000247384439-0efczv-t500x500.jpg',
//     price : 10
//     }),  new Product({
//     title : 'Om kalthom' ,
//     description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
//         "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " +
//         "when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//     image: 'https://i1.sndcdn.com/artworks-000247384439-0efczv-t500x500.jpg',
//     price : 10
//     }),
//
// ];
mongoose.connect('mongodb://localhost:27017/shopping',
    { useNewUrlParser: true, useUnifiedTopology: true })

var products = Product.create([{
    title : 'Om kalthom' ,
    description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " +
        "when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: 'https://i1.sndcdn.com/artworks-000247384439-0efczv-t500x500.jpg',
    price : 10
},{
    title : 'Om kalthom' ,
    description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " +
        "when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: 'https://i1.sndcdn.com/artworks-000247384439-0efczv-t500x500.jpg',
    price : 10
},{
    title : 'Om kalthom' ,
    description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " +
        "when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: 'https://i1.sndcdn.com/artworks-000247384439-0efczv-t500x500.jpg',
    price : 10
}]).then(function (){
    mongoose.disconnect();
});


// var done =0 ;
// for (var i=0, c= products.length  ; i< c ;i++ ){
//     products[i].save(function (err, result){
//         done++;
//         if (done ===  products.length){
//         }
//     })
// }

