const readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Enter the Number : ", (number) => {
    let myNumber = Math.abs(parseInt(number));
    let digit;
    let myStr = "";
    while (myNumber > 0) {
        digit = myNumber % 10;;
        myStr += digit;
        myNumber = Math.floor(myNumber / 10);
    }

    if (myStr == number) {
        console.log("The Number is Palindrome")
    }
    else {
        console.log("The Number is not Palindrome")
    }

    rl.close();
});
