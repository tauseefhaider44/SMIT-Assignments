let myString = "I am a String and a Character";
let myChar = "a";

for (let i = 0; i < myString.length - 1; i++) {
    if (myString.charAt(i) == myChar) {
        console.log(`The Occurance of ${myChar} is at : ${i}`)
    }
}