const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let first_Number = Math.floor((Math.random() * 100) + 1);
let second_Number = Math.floor((Math.random() * 100) + 1);

let rand_Operator = Math.floor((Math.random() * 4) + 1);
let operator;
let output;
switch (rand_Operator) {
    case 1:
        operator = '+'
        output = first_Number + second_Number;
        break;
    case 2:
        operator = '-'
        output = first_Number - second_Number;
        break;
    case 3:
        operator = '*'
        output = first_Number * second_Number;
        break;
    case 4:
        operator = '/'
        output = first_Number / second_Number;
        break;
    default:
        break;
}

rl.question("Guess the output for the two numbers " + first_Number + " and " + second_Number + " : ", UserInput => {
    let UserInputInt = parseInt(UserInput)
    if (UserInputInt == output) {
        console.log("Weldone You Guessed it right")
    }
    else {
        console.log("Try Again the correct output was : " + output)
    }
    rl.close();
})