var os = require('os');
var converters = require("./converters");

function getOSinfo() {
    var type = os.type();
    var release = os.release();
    if (type === "Darwin") {
        type = "OSX";
    } else if (type === "Windows_NT") {
        type = "Windows";
    } else {
        type = "Linux";
    }
    console.log("System: " + type);
    console.log("Release: " + release);
    console.log("Procesor: " + os.cpus()[0].model);
    console.log("Uptime: " + converters.timeFormat(os.uptime()));
    console.log("User name: " + os.userInfo().username);
    console.log("Home dir: " + os.userInfo().homedir);
}

exports.getOSinfo = getOSinfo;
