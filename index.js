const fs = require("fs");
const colors = require("colors");

fs.readdir("./", "utf-8", function (err, files) {
    fs.writeFile("./dir-content.txt", files, function (err) {
        if (err) throw err;
        console.log("Zapisano".red);
        fs.readFile("./dir-content.txt", "utf-8", function (err, data) {
            if (err) throw err;
            console.log(data);
        })
    })
});
