const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Enter the Number : ", number => {
    rl.close();
    if (number % 5 == 0 && number % 11 == 0) {
        console.log(`${number} is divisible by both 5 and 11`);
    }
    else {
        console.log(`${number} is not divisible by both 5 and 11`)
    }
})