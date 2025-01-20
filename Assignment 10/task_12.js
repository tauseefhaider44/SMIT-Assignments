let myString = "123321";
let reverse_String = "";

for (let i = myString.length; i >= 0; i--) {
    reverse_String += myString.charAt(i);
}

if (myString == reverse_String) {
    console.log("The string is Palindrome")
}
else {
    console.log("The String is not Palindrome")
}