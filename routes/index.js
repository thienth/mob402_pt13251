var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// danh sach san pham - danh muc

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
