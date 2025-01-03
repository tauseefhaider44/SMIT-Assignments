const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Enter the Character: ", character => {
    rl.close();
    if (character.length === 1) {
        if (isNaN(character) == false) {
            console.log(`${character} is a Number`);
        }
        else if (character.toLowerCase() !== character.toUpperCase()) {
            console.log(`${character} is an Alphabet`)
        }
        else {
            console.log(`${character} is a Special Character`);
        }
    } else {
        console.log("Please enter only one character.");
    }
});
