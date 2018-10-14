// var mongoose = require('../util/db');
// var catModel = mongoose.model('cat', { name: String },'cat');
var catModel = require('../model/catModel');
var url = require('url')

var getAllCats = (req,res,next) => {
    catModel.allCats((data) => {
        res.json(data)
    })
}
var getPageCats = (req, res, next) => {
    var obj = url.parse(req.url,true)
    catModel.allCats((da) => {
        catModel.getPageCats(obj.query.page,obj.query.pagesize,(data) => {
            res.json({
                data: data,
                pagecount: Math.ceil(da.length/obj.query.pagesize)
            })
        })
    })
}

var addcat = (req, res, next) => {
    var obj = url.parse(req.url, true)
    catModel.addCat(obj.query.name, () => {
        res.json({
            return: true,
            data: true
        })
    })
}

var removeCat = (req, res, next) => {
    var id = req.params.id;

    catModel.removeCat(id,() => {
        res.json({
            return: true,
            data: true
        })
    })
}
var modifyCat = (req, res, next) => {
    var obj = url.parse(req.url, true)
    catModel.modifyCat(obj.query.name1,obj.query.name2, () => {
        res.json({
            return: true,
            data: true
        })
    })
}


module.exports = {
    getAllCats,
    getPageCats,
    addcat,
    removeCat,
    modifyCat
}