Category = require('../models/Category');
var Handlebars = require('hbs');
exports.layouts = async (req, res, next) => {
    let resultCategory = await Category.find();
    let menu = ``;
    resultCategory.map((v,i) => {
        menu += `<a class="dropdown-item" href="/danh-muc/${v._id}">${v.name}</a>`;
    });
    menu += `<a class="dropdown-item" href="/danh-muc/quan-ly">Quản lý danh mục</a>`;
    Handlebars.registerHelper('mainmenu', function() {
        return menu;
    });
    next();
};