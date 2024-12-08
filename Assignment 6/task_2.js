const readline = require('readline');

const myinput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

myinput.question("What is the Traffic Light Color : ", function (Color) {
    if (Color.toLowerCase() == 'red') {
        console.log("STOP...!");
    }
    else if (Color.toLowerCase() == 'yelllow') {
        console.log("Slow Down...!");
    }
    else if (Color.toLowerCase() == 'green') {
        console.log("Go...!");
    }
    else {
        console.log("Invalid Color")
    }
    myinput.close();
});

myinput.on("close", function () {
    process.exit(0);
});