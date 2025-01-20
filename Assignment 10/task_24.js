let myString = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus magnam et magni maxime architecto dolorem corrupti alias deserunt pariatur adipisci?"

let myObj = {};

for (let i = 0; i < myString.length - 1; i++) {
    if (myObj[i] != " ") {
        const char = myString.charAt(i);
        if (myObj[char] === undefined) {
            myObj[char] = 1;
        }
        else {
            myObj[char] += 1;
        }
    }
}

for (const key in myObj) {
    const element = myObj[key];
    console.log(key, element)
    if (key != " ") {
        if (element > 1) {
            myString = myString.replaceAll(key, "");
        }
    }
}

console.log(`Here is the String after removing all repeated characters : ${myString}`)

