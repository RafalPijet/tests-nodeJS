var systemInfo = require("../modules/osinfo");
process.stdin.setEncoding('utf-8');
console.log("Enter instruction:");
process.stdin.on("readable", function () {
    var input = process.stdin.read();

    if (input != null) {
        var instruction = input.toString().trim();

        switch (instruction) {
            case "/exit":
                process.stdout.write("Quitting app!\n");
                process.exit();
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
    }
});
