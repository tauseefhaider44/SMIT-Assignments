const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let myVowels = "aeiou"
rl.question("Enter the alphabet : ", alphabet => {
    rl.close();
    let isVowel = false;
    let myVowels = ['a', 'e', 'i', 'o', 'u']
    if (alphabet.length === 1) {
        if (alphabet.toLowerCase() !== alphabet.toUpperCase()) {
            for (let index = 0; index < myVowels.length; index++) {
                if (alphabet == myVowels[index].toLowerCase()) {
                    isVowel = true;
                }
            }
            if (isVowel == true) {
                console.log(`${alphabet} is a Vowel`)
            }
            else {
                console.log(`${alphabet} is a Consonent`)
            }
        }
        else if (isNaN(alphabet) == false) {
            console.log(`${alphabet} is not an Alphabet`)
        }
        else {
            console.log(`${alphabet} is not an Alphabet`)
        }
    } else {
        console.log("Please enter only one character.");
    }
})