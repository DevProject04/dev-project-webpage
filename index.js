const fs = require('fs');
const http = require('http');
const index = fs.readFileSync('index.html');

http.createServer(function (req, res) {
    res.writeHead(200);
    res.end(index);
}).listen(3000);