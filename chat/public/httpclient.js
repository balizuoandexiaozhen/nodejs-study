const http = require("http");
const fs = require('fs');
var cheerio = require("cheerio");

http.get('http://news.baidu.com/', (res) => {
    var body = '';
    res.on("data", (chunk) => {
        body += chunk;
    })
    res.on('end', () => {
        var news = ''
        var $ = cheerio.load(body);
        $(".focuslistnews a").each((index, item) => {
            news += $(item).text() + '\r\n';
        })
        fs.writeFileSync('./news.txt',news);
    }) 
})