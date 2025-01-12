const readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Enter the Number : ", (number) => {
    let myNumber = Math.abs(parseInt(number));
    let digit;
    let myarr = [];

    while (myNumber > 0) {
        digit = myNumber % 10;
        myNumber = Math.floor(myNumber / 10);
        myarr.push(digit);
    }

    for (const element of myarr) {
        console.log(element)
    }

    rl.close();
});
