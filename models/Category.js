var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/mob402');
let categorySchema = new mongoose.Schema({
    name: String,
    price: Number,
    old_price: Number,
    image: String,
    galleries: Array
});

var CategoryModel = module.exports = mongoose.model('categories', categorySchema );
