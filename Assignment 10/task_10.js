let myString = "I am a String";
let words = 1;

for (const element of myString) {
    if (element === " ") {
        words++;
    }
}
console.log(words);