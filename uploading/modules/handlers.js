const fs = require("fs");
const formidable = require("formidable");
let fileName = null;

exports.upload = function (request, response) {
    const form = new formidable.IncomingForm;
    form.parse(request, function (error, fields, files) {
        fileName = files.upload.name;
        fs.renameSync(files.upload.path, fileName);
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write("received image:<br>");
        response.write("<img src='/show' />");
        response.end();
    });
};

exports.welcome = function (request, response) {
    console.log("Rozpoczynam obsługę żądania welcome.");
    fs.readFile("./uploading/templates/start.html", function (err, data) {
        response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
        response.write(data);
        response.end();
    });
};

exports.show = function (request, response) {
  fs.readFile(fileName, "binary", function (err, file) {
      response.writeHead(200, {"Content-Type": "image/png"});
      response.write(file, "binary");
      response.end();
  })
};

exports.start = function(request, response) {
    fs.readFile("./uploading/templates/start.css", function (err, style) {
        response.writeHead(200, {"Content-Type": "text/css"});
        response.write(style);
        response.end();
    })
};

exports.style = function(request, response) {
    fs.readFile("./uploading/templates/upload.css", function (err, style) {
        response.writeHead(200, {"Content-Type": "text/css"});
        response.write(style);
        response.exit();
    })
};

exports.error = function (request, response) {
    console.log("Nie wiem co robić.");
    response.write("404 :(");
    response.end();
};
