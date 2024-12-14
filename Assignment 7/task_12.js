const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Enter the First Number : ", firstNumber => {
    rl.question("Enter the Second Number : ", secondNumber => {
        rl.close();
        if (firstNumber == secondNumber) {
            console.log("Both Number are equal....!")
        }
        else if (firstNumber > secondNumber) {
            console.log(`${firstNumber} is greater than ${secondNumber}`)
        }
        else {
            console.log(`${secondNumber} is greater than ${firstNumber}`)
        }
    })
})