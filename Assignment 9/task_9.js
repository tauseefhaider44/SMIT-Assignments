const readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question("Enter the Number : ", number => {
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} * ${i} = ${number * i}`)
    }
    rl.close();
})
