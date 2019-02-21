var mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://127.0.0.1:27017/mob402', { useNewUrlParser: true });
let productSchema = new mongoose.Schema({
    name: { type: String, default: "" },
    price: Number,
    old_price: Number,
    image: String,
    galleries: Array,
    cate_id: { type: Schema.Types.ObjectId, ref: 'categories' }
});
var Product = module.exports = mongoose.model('products', productSchema );
// module.exports.all = () => {
//     return ProductModel.find({});
// }