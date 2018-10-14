var usersModel = require('../model/usersModel');
const crypto = require('crypto');

var register = (req, res) => {
    let {username,password} = req.body  //获取post提交的用户名和密码
    var hash = crypto.createHash("sha256");   //创建hash值
    hash.update(password)                       //并将密码加密

    usersModel.find({username},(data) => {
        if(data.length > 0) {
            res.json({
                ret: true,
                data:false
            })
        } else {
            usersModel.register({username,password:hash.digest('hex')},() => {
                res.json({
                    ret: true,
                    data:true
                })
            }) 
        }
    })
}

var login = (req, res) => {
    let {username,password} = req.body;
    var hash = crypto.createHash("sha256");   //创建hash值
    hash.update(password) 
    usersModel.find({username,password:hash.digest('hex')},(data) => {
        if (data.length > 0) {
            //console.log(data.length)
            req.session.login = true;
            req.session.username = username;
            res.json({
                ret: true,
                data: {
                    login: true,
                    username:req.session.username
                }

            })
        } else {
            res.json({
                ret: true,
                data: {
                    login: false
                }

            })
        }

    })
}

var isLogin = (req,res) => {
    if (req.session.login) {
        res.json({
            ret: true,
            data: {
                login: true,
                username:req.session.username
            }

        })
    } else {
        res.json({
            ret: true,
            data: {
                login: false
            }

        })
    }
}

var logout = (req,res) => {
    if (req.session.login) {
        req.session.login = null;
        res.json({
            ret: true,
            data: {
                logout: true
            }
        })
    } 
}

module.exports = {
    register,
    login,
    isLogin,
    logout
}