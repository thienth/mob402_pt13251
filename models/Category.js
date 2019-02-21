var mongoose = require('mongoose'); 
const Schema = mongoose.Schema;
mongoose.connect('mongodb://127.0.0.1:27017/mob402', { useNewUrlParser: true });
let categorySchema = new mongoose.Schema({
    name: String,
    desc: String,
    image: String,
    // products: [
    //     { type: Schema.Types.ObjectId, ref: 'products' }
    // ]
}, { toJSON: { virtuals: true } });

categorySchema.virtual('products', {
    ref: 'products',
    localField: '_id',
    foreignField: 'cate_id',
    justOne: false // set true for one-to-one relationship
})
var Category = module.exports = mongoose.model('categories', categorySchema );
