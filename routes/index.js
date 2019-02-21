var express = require('express');
var router = express.Router();
var Product = require('../models/Product');
var Category = require('../models/Category');

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
  Product.find(query)
      .then(function(result){
        console.log(result);
        res.render('index', {products: result});
      });
});
router.get('/chi-tiet/:id', function(req, res, next){
  // res.send(req.params.id);
  Product.findOne({_id: req.params.id})
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

// them/sua danh muc
router.get('/danh-muc/them', function(req, res, next) {

  res.render('danhmuc/them');
});

router.get('/danh-muc/:id', function(req, res, next) {
  console.log(req.params.id)
  Category.findOne({_id: '5c3fd82cce36785b08e494db'})
      .populate('products')
      .exec((err, data) => {
        res.json(data);
      })
    // .populate('products').exec(function (err, data) {
    //   console.log(data);
    //   res.json(data)

    //   // console.log(doc.populated('author')) // '5144cf8050f071d979c118a7'
    // })
    
});
// chi tiet san pham

// dang nhap

// danh sach danh muc - quan tri



router.post('/danh-muc/save-them', upload.single('image'), function(req, res, next) {
  let filename = req.file.path.replace("public/", "");
  let cate = new Category({
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
router.get('/danh-muc/xoa/:id', function(req, res, next) {
  Category.remove({_id: req.params.id}, () => {
    res.redirect('/');
  })
});
// danh sach san pham - quan tri

// them/sua san pham

// xoa san pham

// danh sach user - quan tri

// them/sua user

// xoa user

module.exports = router;
