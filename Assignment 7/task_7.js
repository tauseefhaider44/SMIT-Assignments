const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


rl.question("Enter your password here.....", password => {
    if (password.length >= 8) {
        console.log("The Password is Strong....!")
    }
    else if (password.length < 8 && password.length > 5) {
        console.log("The Password is Moderate....!")
    }
    else {
        console.log("The Password is Strong....!")
    }
    rl.close();
});