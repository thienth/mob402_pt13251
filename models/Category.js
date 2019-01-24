var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/mob402', { useNewUrlParser: true });
let categorySchema = new mongoose.Schema({
    name: String,
    products: [
        { type: Schema.Types.ObjectId, ref: 'products' }
    ]
});

var CategoryModel = module.exports = mongoose.model('categories', categorySchema );
