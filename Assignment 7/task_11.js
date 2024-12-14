const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question("Enter Your Age : ", age => {
    let userAge = parseInt(age);
    if (userAge < 18 && userAge > 0) {
        console.log("You are Underaged and you can't vote.....")
    }
    else if (userAge >= 18) {
        console.log("You are eligible to caste vote.....")
    }
    else {
        console.log("Invalid Age....!!")
    }
    rl.close();
})