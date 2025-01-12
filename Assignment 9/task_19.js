const { diffieHellman } = require('crypto');
const readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Enter the Number : ", (number) => {
    let myNumber = Math.abs(parseInt(number));

    let digit = [];

    while (myNumber > 0) {
        digit.push = myNumber % 10;
        myNumber = Math.floor(myNumber / 10);
    }

    console.log(digit)



    rl.close();
});
