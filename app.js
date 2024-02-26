var http = require("http")

http.createServer(function(req, res){
    res.end("<h1>Hello World<h1>")
}).listen(8081)

console.log("Conectado...\n: http://127.0.0.1:8081 \n: http://localhost:8081")