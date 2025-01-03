const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Enter the Number : ", number => {
    rl.close();
    if (number % 2 == 0) {
        console.log(`${number} is an even`);
    }
    else {
        console.log(`${number} is an odd number`)
    }
})