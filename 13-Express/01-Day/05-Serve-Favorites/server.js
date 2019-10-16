var http = require("http");
var fs = require("fs");

var PORT = 8080;

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    var path = req.url;

    switch(path){

        case "/index.html" :

            fs.readFile(__dirname + "/index.html", function(err, data){
    
            res.writeHead(200, { "Content-Type": "text/html"});
            res.end(data);
            });
            return;

        case "/food.html" :

            fs.readFile(__dirname + "/food.html", function(err, data){
    
            res.writeHead(200, { "Content-Type": "text/html"});
            res.end(data);
            })
            return;

        case "/movies.html" :
        
            fs.readFile(__dirname + "/movies.html", function(err, data){
    
            res.writeHead(200, { "Content-Type": "text/html"});
            res.end(data);
            })
            return;

        case "/css.html" :
        
            fs.readFile(__dirname + "/css.html", function(err, data){
    
            res.writeHead(200, { "Content-Type": "text/html"});
            res.end(data);
            })
            return;

        default:
            return fs.readFile(__dirname + "/index.html", function(err, data){
    
                res.writeHead(200, { "Content-Type": "text/html"});
                res.end(data);
                });
          
    };

}

server.listen(PORT, function(){
    console.log("Server is listening on PORT: " + PORT);
});