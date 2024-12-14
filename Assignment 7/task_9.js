const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Enter the weather condition now..... ", condition => {
    if (condition.toLowerCase() === "sunny") {
        console.log("Wear Sun Glasses");
    }
    else if (condition.toLowerCase() === "rainy") {
        console.log("Take an Umbrella");
    }
    else if (condition.toLowerCase() === "cold") {
        console.log("Wear a Jacket");
    }
    else {
        console.log("Invalid weather condition");
    }
    rl.close();
});
