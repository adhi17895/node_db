var http = require('http'); //require command is used to include a module, in this case 'http'
//Now the application will be able to create a server and has access to HTTP module

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080);
