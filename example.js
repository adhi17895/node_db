var http = require('http');
var dt = require('./firstmodule'); 
//function name is stored in a variable and is called as an object 
//including the exports file where you created your own module

//Creating a server using http
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time currently:" + dt.myDateTime()); 
  
res.write(req.url); //requesting the url to be displayed on the page
  res.end();
//message to be displayed on the web page
}).listen(8080);
