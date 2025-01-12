const readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Enter the Number : ", (number) => {
    let myNumber = Math.abs(parseInt(number));
    let myTempNumber = myNumber;
    let last_digit = myNumber % 10;
    let first_digit;
    let divisor = 1;

    while (myTempNumber >= 10) {
        myTempNumber = Math.floor(myTempNumber / 10);
        divisor *= 10;
    }

    first_digit = myTempNumber;
    let middle_part = Math.floor((myNumber % divisor) / 10);
    let swappedNumber = last_digit * divisor + middle_part * 10 + first_digit;

    console.log(`The Swapped Number is: ${swappedNumber}`);
    rl.close();
});
