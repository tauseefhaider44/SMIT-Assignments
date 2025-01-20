let myString = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus magnam et magni maxime architecto dolorem corrupti alias deserunt pariatur adipisci?"

let char = "a";
let charIndex = myString.indexOf(char);
let mynewString = myString.replace(myString.charAt(charIndex), "");
console.log(mynewString);