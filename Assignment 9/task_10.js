const readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let digits = 0;

rl.question("Enter the Number : ", number => {
    while (number > 0) {
        if (number % 10 >= 1) {
            digits += 1;
        }
        number /= 10;
    }
    console.log("The digits are : " + digits);
    rl.close();
})
