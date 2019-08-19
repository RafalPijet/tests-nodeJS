const http = require("http");
const fs = require("fs");
const server = http.createServer();

server.on("request", function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");

    if (request.method === "GET" && request.url === "/") {
        fs.readFile("./index.html", "utf-8", function (err, data) {
            response.write(data);
            response.end();
        });
    } else {
        response.setHeader("Content-Type", "image.png");
        response.statusCode = 404;
        const image = fs.readFileSync("./error.jpg");
        response.end(image);
    }
});

server.listen(9000);
