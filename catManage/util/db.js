const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test',() => {
    console.log("连接成功")
});

// const Cat = mongoose.model('Cat', { name: String },'cat');


module.exports =mongoose;