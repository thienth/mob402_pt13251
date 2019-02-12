var express = require('express');
var router = express.Router();
var ProductModel = require('../models/Product');
var CategoryModel = require('../models/Category');

var multer  = require('multer');
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

var upload = multer({ storage });

router.get('/', function(req, res, next) {

  let query = {};
  if(req.query.keyword != undefined && req.query.keyword != ""){
    query.name = { "$regex": req.query.keyword, "$options": "i" }
  }
  ProductModel.find(query)
      .then(function(result){
        console.log(result);
        res.render('index', {products: result});
      });
});
router.get('/chi-tiet/:id', function(req, res, next){
  // res.send(req.params.id);
  ProductModel.findOne({_id: req.params.id})
    .populate('cate_id')
    .exec((err, result) => {
      
      console.log(result);
      res.render('detail', {product: result});
    })
})

// danh sach san pham - danh muc
router.get('/danh-muc', function(req, res, next) {
  res.render('danhmuc', { title: 'Express' });
});
// chi tiet san pham

// dang nhap

// danh sach danh muc - quan tri

// them/sua danh muc
router.get('/danh-muc/them', function(req, res, next) {

  res.render('danhmuc/them');
});

router.post('/danh-muc/save-them', upload.single('image'), function(req, res, next) {
  let filename = req.file.path.replace("public/", "");
  let cate = new CategoryModel({
    name: req.body.name,
    desc: req.body.desc,
    image: filename
  });

  cate.save((error) => {
    console.log("Lưu danh mục thành công!");
    if (error) {
      console.error(error);
    }
    res.redirect('/');
  });
});
// xoa danh muc

// danh sach san pham - quan tri

// them/sua san pham

// xoa san pham

// danh sach user - quan tri

// them/sua user

// xoa user

module.exports = router;
