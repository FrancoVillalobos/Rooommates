const http = require("http")
const fs = require("fs")

http.createServer((req,res) => {
    if(req.url == "/" && req.method == "GET") {
        res.setHeader("content-type", "text/html");
        res.end(fs.readFileSync("index.html", "utf8"));
    }

}).listen(3000, console.log("Serverr ON"))