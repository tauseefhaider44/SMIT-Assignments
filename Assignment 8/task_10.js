const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

rl.question("Enter the Character: ", character => {
    rl.close();
    if (character.length === 1) {
        if (isNaN(character) == false) {
            console.log(`${character} is not an Alphabet`);
        }
        else if (character.toLowerCase() !== character.toUpperCase()) {
            for (let index = 0; index < lowercaseLetters.length; index++) {
                if (character == lowercaseLetters.charAt(index)) {
                    console.log("This is lower case")
                }
                else if (character == uppercaseLetters.charAt(index)) {
                    console.log("This is an Upper case")
                }
            }
        }
        else {
            console.log(`${character} is not an Alphabet`);
        }
    } else {
        console.log("Please enter only one character.");
    }
});
