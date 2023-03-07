const http = require('http');
const fs= require('fs'); // the file name
const server = http.createServer((req, res) => {
const url= req.url;
const method = req.method;// form request method is eual to host 
if (url === '/') { 
    res.write('<html>');
   res.write('<head><title>Enter what you what to know</title></head>');
   res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">send</button></form></body>');
res.write('</html>');
  return res.end();
}
if(url === '/message' && method === 'POST') {
    const body =[];
    req.on('data', (chunk) => {// data event
        console.log(chunk);
        body.push(chunk);
    });

    req.on('end', () => {
        const parseBody = Buffer.concat(body).toString();
       const message = parseBody.split('=')[1];
       console.log(parseBody); //to o/p the msg whta we enterd
       //fs.writeFileSync("message.txt", message);
    });
    fs.writeFileSync('message.text', 'DUMMY');
    res.statusCode = 302; 
   res.setHeader('Location', '/');
   return res.end();
}
    res.setHeader('Content-Type', 'text/html');
   res.write('<html>');
    res.write('<head><title>my first web page</title></head>');
   res.write('<body><h1>my first web page welcome all the best to learn node js</h1></body>');
   res.write('<body><h2>Sujeeethaptil, jyotisujeethpatil, saikriti, sairachith</h2></body>');
   res.write('</html>');
   res.end();
});

server.listen(3000);