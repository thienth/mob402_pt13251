var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient

/* GET home page. */
router.get('/', function(req, res, next) {

  MongoClient.connect('mongodb://localhost:27017/mob402', function (err, client) {
    if (err) throw err

    var db = client.db('mob402')
    
    db.collection('products').find().toArray(function (err, result) {
      if (err) throw err

      console.log(result)
      res.render('index', { title: 'Express', products: result });
    })
  })
  
});

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
