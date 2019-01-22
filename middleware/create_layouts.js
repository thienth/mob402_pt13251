Category = require('../models/Category');
var Handlebars = require('hbs');
exports.layouts = async (req, res, next) => {
    let resultCategory = await Category.find();
    let menu = ``;
    resultCategory.map((v,i) => {
        menu += `<a class="dropdown-item" href="#">${v.name}</a>`;
    });
    console.log(menu);
    Handlebars.registerHelper('mainmenu', function() {
        return menu;
    });
    next();
};