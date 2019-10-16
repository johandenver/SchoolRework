var http = require("http");

var PORT1 = 7000;
var PORT2 = 7500;

function handleRequestOne(request, response) {
    response.end("aaahh yeah this works!! Path Hit: " + request.url);
}

function handleRequestTwo(request, response) {
    response.end("aaahh yeah this works!! Path Hit: " + request.url);
}

var serverOne = http.createServer(handleRequestOne);
var serverTwo = http.createServer(handleRequestTwo);

serverOne.listen(PORT1, function() {
    console.log("Never ever ever ever give up!! - W.C.")
});

serverTwo.listen(PORT2, function() {
    console.log("We will, we will, rock you!! - Queen")
});