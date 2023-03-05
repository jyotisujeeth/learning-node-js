const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    return setHomePage(req, res);
  }
  if (req.url === "/about") {
    return aboutusPage(req, res);
  }
  if (req.url === "/node") {
    return nodejsProject(req, res);
  }
});

function setHomePage(req, res) {
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Welcome home!</h1></body>");
  res.write("</html>");
  return res.end();
}
function aboutusPage(req, res) {
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Welcome to about us page!</h1></body>");
  res.write("</html>");
  return res.end();
}
function nodejsProject(req, res) {
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Welcome to my Node js!</h1></body>");
  res.write("</html>");
  return res.end();
}

server.listen(3000);