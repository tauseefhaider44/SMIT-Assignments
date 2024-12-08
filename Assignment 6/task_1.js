const readline = require('readline');

const myinput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

myinput.question("Enter the Desired  Number : ", function (number) {
    if (number == 1) {
        console.log("The light is ON");
    }
    else if (number == 0) {
        console.log("The light is OFF");
    }
    else {
        console.log("Invalid Input");
    }
    myinput.close();
});

myinput.on("close", function () {
    process.exit(0);
});