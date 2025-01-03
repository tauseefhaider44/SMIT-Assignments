const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Enter the First Number : ", first_number => {
    rl.question("Enter the Second Number : ", second_number => {
        rl.question("Enter the Third Number : ", third_number => {
            rl.close();
            first_number = parseFloat(first_number);
            second_number = parseFloat(second_number);
            third_number = parseFloat(third_number);
            if (first_number > second_number && first_number > third_number) {
                console.log(`${first_number} is greatest...`)
            }
            else if (second_number > first_number && second_number > third_number) {
                console.log(`${second_number} is greatest...`)
            }
            else {
                console.log(`${third_number} is greatest...`)
            }
        })
    })
})
