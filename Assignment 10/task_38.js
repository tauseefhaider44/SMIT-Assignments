let myString = "I     am     a      String and    i   have   many   extra    spaces   ";

let words = myString.split(" ");

console.log(words)

let newstr = "";

for (let i = 0; i < words.length; i++) {
    if (words[i] != "") {
        newstr += words[i] + " ";
    }
}

console.log(newstr);