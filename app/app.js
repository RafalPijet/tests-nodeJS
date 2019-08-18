var systemInfo = require("../modules/osinfo");
var EventEmiter = require("events").EventEmitter;
var emiter = new EventEmiter();
emiter.on("beforeCommand", function (command) {
   console.log('You wrote: ' + command + ', trying to run command');
});
emiter.on("afterCommand", function () {
   console.log('Finished command');
});
process.stdin.setEncoding('utf-8');
console.log("Enter instruction:");
process.stdin.on("readable", function () {
    var input = process.stdin.read();

    if (input != null) {
        var instruction = input.toString().trim();
        emiter.emit("beforeCommand", instruction);

        switch (instruction) {
            case "/exit":
                process.stdout.write("Quitting app!\n");
                process.exit();
                break;
            case "version":
                process.stdout.write("Node version: ");
                process.stdout.write(process.version + "\n");
                break;
            case "language":
                process.stdout.write("User language: ");
                process.stdout.write(process.env.LC_CTYPE + "\n");
                break;
            case "getOSinfo":
                systemInfo.getOSinfo();
                break;
            default:
                process.stderr.write("Wrong command!!!\n");
        }
        emiter.emit("afterCommand");
    }
});
