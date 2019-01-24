var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/mob402',{ useNewUrlParser: true });
let productGallerySchema = new mongoose.Schema({
    link_url: String
});

let ProductGallery = mongoose.model('Cat', schema);

module.exports = Cat;