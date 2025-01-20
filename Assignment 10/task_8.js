let myString = "HeLLo 123 @# WoRLd!";

let letter_Count = 0;
let number_Count = 0;
let special_Character_Count = 0;

for (const element of myString) {
    const code = element.charCodeAt(0);

    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
        letter_Count++;
    } else if (code >= 48 && code <= 57) {
        number_Count++;
    } else {
        special_Character_Count++;
    }
}

console.log(`Alphabets: ${letter_Count}`);
console.log(`Digits: ${number_Count}`);
console.log(`Special Characters: ${special_Character_Count}`);