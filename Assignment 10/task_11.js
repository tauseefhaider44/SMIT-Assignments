let myString = "I am a String"
let reverse_String = "";

for (let index = myString.length - 1; index >= 0; index--) {
    reverse_String += myString.charAt(index)
}

console.log(reverse_String);