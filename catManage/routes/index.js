var express = require('express');
var router = express.Router();
var catController = require('../controller/catController');

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test',() => {
//     console.log("连接成功")
// });

// var catModel = mongoose.model('cat', { name: String },'cat');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/login.html');
});

router.get('/cats', catController.getAllCats)

router.get('/pageCats*', catController.getPageCats)

router.get('/add*', catController.addcat)

router.get('/del/:id', catController.removeCat)

router.get('/modify*', catController.modifyCat)

router.get('/search*', catController.modifyCat)

module.exports = router;
