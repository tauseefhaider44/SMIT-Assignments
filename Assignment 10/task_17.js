let myString = "I am a String and a Character";
let myChar = "a";
let count = 0;

for (let i = 0; i < myString.length - 1; i++) {
    if (myString.charAt(i) == myChar) {
        count++;
        console.log(`The Occurance of ${myChar} is at : ${i}`)
    }
}
console.log(`The Character ${myChar} comes ${count} times in string`)