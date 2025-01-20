let myString = "The sun is shining brightly today. Today is a perfect day for a walk in the park. I love the sunshine. The park is peaceful, and the trees are beautiful. A walk in the park always makes me feel relaxed.";
let word = "is";

let words = myString.split(" ");

for (let i = 0; i < words.length; i++) {
    if (words[i] === word) {
        console.log(`The occurrence of "${word}" is at index: ${i}`);
    }
}
