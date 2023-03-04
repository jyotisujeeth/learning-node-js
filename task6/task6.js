const http = require("http");

const server = http.createServer((req, res) => {
  console.log("jyotisujeeth");
});

server.listen(4000);

http
  .createServer((req, resp) => {
    resp.write("jyotisujeeth");
    resp.end();
  })
  .listen(4000);