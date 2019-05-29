var fs = require('fs');
var rs = fs.createReadStream('./upper_case.js');
rs.on('open', function () {
  console.log('The file is open');
}); 

// useful for creating a warning pop-up in the website
