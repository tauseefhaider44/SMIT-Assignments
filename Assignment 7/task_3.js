const readline = require('readline');

const myinput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

myinput.question("Enter the Temperature Value in Celsius : ", function (Temperature) {
    if (Temperature <= 0) {
        console.log("Freezing...!");
    }
    else if (Temperature > 0 && Temperature <= 15) {
        console.log("Cold...!");
    }
    else if (Temperature > 15 && Temperature <= 30) {
        console.log("Warm...!");
    }
    else if (Temperature > 30) {
        console.log("Hot...!")
    }
    myinput.close();
});

myinput.on("close", function () {
    process.exit(0);
});