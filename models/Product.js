var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/mob402', { useNewUrlParser: true });
let productSchema = new mongoose.Schema({
    name: { type: String, default: "" },
    price: Number,
    old_price: Number,
    image: String,
    galleries: Array
});
var ProductModel = module.exports = mongoose.model('products', productSchema );
// module.exports.all = () => {
//     return ProductModel.find({});
// }