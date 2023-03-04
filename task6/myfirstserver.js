const http = require('http');// http is alwayes look for golbal module

const server = http.createServer((req, res) => {
console.log(req);
});

server.listen(3000);

