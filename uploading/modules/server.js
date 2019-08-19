const http = require("http");
const colors = require("colors");
const handlers = require("./handlers");

function start() {
    function onRequest(request, response) {
        console.log("Odebrano zapytanie".blue);
        response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
        switch (request.url) {
            case "/upload":
                handlers.upload(request, response);
                break;
            case "/":
            case "/welcome":
                handlers.welcome(request, response);
                break;
            case "/show":
                handlers.show(request, response);
                break;
            case "/start":
                handlers.start(request, response);
                break;
            case "/style":
                handlers.style(request, response);
                break;
            default:
                handlers.error(request, response);
        }
    }
    http.createServer(onRequest).listen(9000);
    console.log("Serwer uruchomiony!".bgRed);
}

exports.start = start;
