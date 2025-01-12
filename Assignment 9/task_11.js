const readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Enter the Number : ", (number) => {
    let myNumber = Math.abs(parseInt(number));
    let last_digit = myNumber % 10;
    let first_digit;

    while (myNumber >= 10) {
        myNumber = Math.floor(myNumber / 10);
    }

    first_digit = myNumber;

    console.log(`First digit: ${first_digit}`);
    console.log(`Last digit: ${last_digit}`);

    rl.close();
});
