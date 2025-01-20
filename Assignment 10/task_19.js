let myString = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus magnam et magni maxime architecto dolorem corrupti alias deserunt pariatur adipisci?";

let frequencyMap = {

};

for (let i = 0; i < myString.length - 1; i++) {

    let char = myString.charAt(i);

    if (char !== " ") {
        if (frequencyMap[char] === undefined) {
            frequencyMap[char] = 1;
        }
        else {
            frequencyMap[char] += 1;
        }
    }
}

let minFreq = Infinity;
let minChar = "";

for (const key in frequencyMap) {
    const element = frequencyMap[key]
    console.log(key, element)
    if (element <= minFreq) {
        minFreq = element
        minChar = key;
    }
}

console.log(`The Maximum Frequency for the Character \"${minChar}\" is \"${minFreq}\" `);

