const readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Enter the Number : ", (number) => {
    let myNumber = Math.abs(parseInt(number));
    let product = 1;
    let digit;
    while (myNumber > 0) {
        digit = myNumber % 10;;
        product *= digit;
        myNumber = Math.floor(myNumber / 10);
    }
    console.log("The Product of Digits is : " + product);

    rl.close();
});
