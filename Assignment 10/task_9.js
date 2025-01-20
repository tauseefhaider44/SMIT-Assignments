let myString = "I am a String";

let vowels = 0;
let consonents = 0;

let vowel_Array = ['a', 'e', 'i', 'o', 'u'];

for (const char of myString.toLowerCase()) {
    if (vowel_Array.includes(char)) {
        vowels++;
    }
    else if (char >= 'a' && char <= 'z') {
        consonents++;
    }
}

console.log(`Vowel Count = ${vowels}`);
console.log(`Consonent Count = ${consonents}`);