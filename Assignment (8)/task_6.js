const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Enter the Year : ", number => {
    rl.close();
    if (number % 4 == 0) {
        console.log(`${number} is a Leap Year`);
    }
    else {
        console.log(`${number} is not a Leap Year`)
    }
})