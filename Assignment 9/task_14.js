const readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Enter the Number : ", (number) => {
    let myNumber = Math.abs(parseInt(number));
    let sum = 0;
    let digit;
    while (myNumber > 0) {
        digit = myNumber % 10;;
        sum += digit;
        myNumber = Math.floor(myNumber / 10);
    }
    console.log("The Sum of Digits is : " + sum);

    rl.close();
});
