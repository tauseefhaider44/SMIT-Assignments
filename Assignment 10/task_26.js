let myString = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus magnam et magni maxime architecto dolorem corrupti alias deserunt pariatur adipisci?"

let char = "a";
let newChar = "b";

function reverseString(String) {
    let myreversedString = "";
    for (let i = String.length - 1; i >= 0; i--) {
        myreversedString += String.charAt(i);
    }
    return myreversedString;
}

const revStrng = reverseString(myString);

let lastCharIndex = revStrng.indexOf(char);

const replacedString = revStrng.replace(revStrng.charAt(lastCharIndex), newChar);

const newString = reverseString(replacedString);

console.log(newString);


