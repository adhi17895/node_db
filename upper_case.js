
var uc = require('upper-case'); 
var http = require('http');

http.createServer(function (req,res) {
res.writeHead(200, {'Content-type' : 'text/html'});
res.write(uc("hello world!"));
res.end();
}).listen(8080);
