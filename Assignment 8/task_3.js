const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question("Enter the Number : ", number => {
    rl.close();
    if (number == 0) {
        console.log("The Number is Zero")
    }
    else if (number > 0) {
        console.log("The number is Positive")
    }
    else {
        console.log("The Number is Negative")
    }
})