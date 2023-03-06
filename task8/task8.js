const http = require("http");
const fs = require('fs');

const server = http.createServer((req, res) => {
const url= req.url;
const method = req.method;
const body=[];

if (url === "/") {
    fs.readFile("message.txt" , {encoding: "utf8"}, (err, data) => {   //UTF-8. We’ll learn the basics of text storage and encoding,
   if(err) {
    console.log("Error reading message.txt");
   }
   console.log(`data from file` + data);
   res.write("<html>");
   res.write("<head> <title> enter message</title></head>");
   res.write(`<body>${data}</body>`);//dispalying the data 
   res.write('<body><form action="/message" method="POST"><input type = "text" name="message"><button type="submit">Send</button></form></body>');

    res.write("</html>");
return res.end();
});
}
else if(url ==="/message" && method === "POST") {
    req.on("data", (chunk) =>  {
        body.push(chunk);
    });

    return req.on("end", () => {
        const parseBody = Buffer.concat(body).toString();
        console.log("parsedbody>>>>>>", parseBody);
        const message = parseBody.split("=")[1];

        fs.writeFileSync("message.txt", message, (err) => {
            if (err) {  
                console.log(err);
        }
        console.log("inside fs.writeFile");
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();

    });
        });
}
else { 
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>my first web page</title></head>");
    res.write("<body><h1>Hello from my Node.js project</h1></body>");
    res.write("</html>");
    res.end();

}
});

server.listen(4000);