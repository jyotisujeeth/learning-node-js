const http = require("http");

http
  .createServer((req, resp) => {
    resp.write("Jyotisujeeth_Patil");
    resp.end();
    //console.log("Rakshanda");
  })
  .listen(4000);