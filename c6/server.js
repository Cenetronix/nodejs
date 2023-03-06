const http = require("http");

const server = http.createServer((req, res) => {
    console.log("test server");
    console.log(req);
    if (req.url =="wiki/MainPage"){
        res.end("Ova e wikipedia main page");
    } else if (req.url == "/about") {
        res.end("<html><head><title>About</title></head><body><h1>Ova e about strana</h1></body></html>");
    }
});
console.log("server is started...")
server.listen(8080);