var mongoose = require('../util/db');
var catModel = mongoose.model('cat', { name: String },'cat');

var allCats = (callback) => {
    catModel.find().then((data) => {
        callback(data)
    })
}

var getPageCats = (page,pagesize,callback) => {
    catModel.find().limit(Number(pagesize)).skip((page - 1)*pagesize).then((data) => {
        callback(data)
    })
}
var addCat = (name,callback) => {
    new catModel({"name": name}).save().then(() => {
        callback()
    }) 
}

var removeCat = (id, callback) => {
    catModel.remove({_id: id}).then(() => {
        callback()
    })
}

var modifyCat = (name1, name2,callback) => {
    catModel.update({"name":name1}, {$set:{"name":name2}}).then(() => {
        callback()
    })
}

module.exports = {
    allCats,
    getPageCats,
    addCat,
    removeCat,
    modifyCat
}

// "5bbde83169cb311710fddc17"