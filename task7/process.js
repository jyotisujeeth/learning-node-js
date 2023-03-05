const http = require('http.js');// http is alwayes look for golbal module
// for importing any file 
const server = http.createServer((req, res) => {// take a request 
// creation of srener method 
console.log(req);
//process.exit(); // it halt the process of contral  and stop the proces
//process wcich we need to be excuting the request
//the contral is provuded back to the terminal 
});

server.listen(3000);// to call the server 

/////createServer// it take a function argument with requestListnrer
// to excute the each and every reqyest response and allow the read and responsess the data 


/////////require impoting a file path   for same file of our path  it shouls start with/ or ./ owen file  we shouls have the asme file in th e file
///http.  has bunch of code it use to create server 
//

//Want to quit your running Node.js server? You can always do that by pressing <code>CTRL + C in the terminal/ command prompt window where you started your server (i.e. where you ran node app.js