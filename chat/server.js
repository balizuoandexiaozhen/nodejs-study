var express = require('express');
var app = express();
app.use(express.static("public"));
var server = require('http').createServer(app);
var io = require('socket.io')(server);
io.on('connection', function(socket){
    socket.on("client", (data) => {
       
        if(!socket.user) {
            socket.user = data;
            io.emit("system",socket.user+'上线了~');
        } else {
            io.emit("system",socket.user+'说：'+data);
        }
        io.emit("system","你好"+data);  //群发

        socket.on("disconnect",() => {
            socket.broadcast.emit("system","退出聊天")
        })
    })
});
server.listen(3000,() => {
    console.log(`listen${server.address().port}...`);
});