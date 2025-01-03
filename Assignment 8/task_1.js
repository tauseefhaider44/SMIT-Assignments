const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Enter the First Number : ", first_number => {
    rl.question("Enter the Second Number : ", second_number => {
        rl.close();
        if (first_number > second_number) {
            console.log(`${first_number} is greater than ${second_number}`);
        }
        else {
            console.log(`${second_number} is greater than ${first_number}`)
        }
    })
})
