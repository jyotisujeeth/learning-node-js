const http = require('http');

const server = http.createServer((req, res) => {
const url= req.url;
if (url === '/') { // this mathch for url value to check
//resopncess 
res.setHeader('Content-Type', 'text/html');//set for new hweder, defult heder, value key, the responses type is html
   res.write('<html>');
   res.write('<head><title>Enter what you what to know</title></head>');
   res.write('<body><h1>Welcome home</h1></body>');
   res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">send</button></form></body>');
   // the name does not have to be "message" it will add any input data to the request and make it acessible via the assigned name
   res.write('</html>');
  return res.end();

}

    //console.log(req.url, req.method, req.headers);// acessing the request from the server and responsess from server
   res.setHeader('Content-Type', 'text/html');//set for new hweder, defult heder, value key, the responses type is html
   res.write('<html>');// write in the fronf of responcesss
   res.write('<head><title>my first web page</title></head>');
   res.write('<body><h1>Welcome to my Node Js project</h1></body>');
  
   res.write('</html>');
   res.end();
   //  ofter ending we shpold no write any theg it will throew an errorres.write('</html>');
});

server.listen(3000);