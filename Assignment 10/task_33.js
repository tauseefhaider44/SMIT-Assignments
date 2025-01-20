let myString = "The sun is shining brightly today. Today is a perfect day for a walk in the park. I love the sunshine. The park is peaceful, and the trees are beautiful.";
let word = "is";

let mynewString = "";

let words = myString.split(" ");

for (let i = words.length - 1; i >= 0; i--) {
    if (words[i] === word) {
        words[i] = ""
        console.log("Hello")
        break;
    }
}

for (let i = 0; i < words.length; i++) {
    mynewString += words[i] + " ";
}

console.log(mynewString)    

