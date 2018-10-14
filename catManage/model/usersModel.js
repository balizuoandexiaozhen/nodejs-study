var mongoose = require('../util/db');
var userModel = mongoose.model('users', { "username": String,"password": String },'users');

var register = (userInfo,callback) => {
   new userModel(userInfo).save().then(() => {
    callback()
   })
}

var find = (userInfo,callback) => {
    userModel.find(userInfo).then((data) => {
        callback(data);
    })
}

module.exports = {
    register,
    find
}