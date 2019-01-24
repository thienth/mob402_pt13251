var express = require('express');
var router = express.Router();
var ProductModel = require('../models/Product');
var CategoryModel = require('../models/Category');

router.get('/', function(req, res, next) {
  // let query = {
  //   name: {
  //       $regex: req.params.keyword,
  //       $options: "i"
  //   }
  // };
  ProductModel.find({})
      .then(function(result){
        res.render('index', {products: result});
      });
});
router.get('/chi-tiet/:id', function(req, res, next){
  // res.send(req.params.id);
  ProductModel.findOne({_id: req.params.id})
    .populate('cate_id')
    .exec((err, cate) => {
      console.log(cate);
      res.render('detail', {product: cate});
    })
    // .then(function(product){
    //     
    //   });
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
