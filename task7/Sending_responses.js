const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);// acessing the request from the server and responsess from server
   res.setHeader('Content-Type', 'text/html');//set for new hweder, defult heder, value key, the responses type is html
   res.write('<html>');// write in the fronf of responcesss
   res.write('<head><title>my first web page</title></head>');
   res.write('<body><h1>my first web page welcome all the best to learn node js</h1></body>');
   res.write('<body><h2>Sujeeethaptil, jyotisujeethpatil, saikriti, sairachith</h2></body>');
   res.write('</html>');
   res.end();
   //  ofter ending we shpold no write any theg it will throew an errorres.write('</html>');
});

server.listen(3000);

// responcess which we want send 
/*
On both requests and responses, Http headers are added to transport metadata from A to B.
The following article provides a great overview of available headers and their role: 

<a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers" rel="noopener noreferrer" target="_blank">

https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers</a>

Whilst this article is a great resource, especially to dive deeper, please <strong>don't learn this list by heart</strong> though! You'll encounter many of these headers throughout the course and I'll explain them when we need them.

// *
