const events = require("events");
var evt = new events.EventEmitter();

evt.on("msg",(data) => {
    console.log(data);
})

evt.emit("msg","abc");
evt.emit("msg","abc");
evt.emit("msg","abc");