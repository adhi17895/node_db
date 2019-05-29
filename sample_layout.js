var http = require('http'); 
//"require" command is used to include a module, in this case 'http'
//Now the application will be able to create a server and has access to HTTP module

//Creating a server using http
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});//write a response to the client
  res.end('Hello World!'); //message to be displayed on the web page and end response
}).listen(8080);
