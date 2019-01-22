var express = require('express');
var router = express.Router();
var ProductModel = require('../models/Product');
var CategoryModel = require('../models/Category');
var Handlebars = require('hbs');

/* GET home page. */
router.get('/', function(req, res, next) {
  ProductModel.find({})
      .then((result) => {
        res.render('index', { title: 'Express', products: result });
      });
});
router.get('/chi-tiet', function(req, res, next){
  res.render('detail');
})

// danh sach san pham - danh muc
router.get('/danh-muc', function(req, res, next) {
  res.render('danhmuc', { title: 'Express' });
});
// chi tiet san pham

// dang nhap

// danh sach danh muc - quan tri

// them/sua danh muc

// xoa danh muc

// danh sach san pham - quan tri

// them/sua san pham

// xoa san pham

// danh sach user - quan tri

// them/sua user

// xoa user

module.exports = router;
