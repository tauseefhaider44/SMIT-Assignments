const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Enter the conversion type 1 for C to F and 2 for F to C : ", temp => {
    let Temperature = parseInt(temp, 10);
    switch (Temperature) {
        case 1:
            rl.question("Enter the Temperature in Celsius: ", celsius => {
                let fahrenheit = (parseFloat(celsius) * 9 / 5) + 32;
                console.log(`Temperature in Fahrenheit: ${fahrenheit}`);
                rl.close();
            });
            break;
        case 2:
            rl.question("Enter the Temperature in Fahrenheit: ", fahrenheit => {
                let celsius = (parseFloat(fahrenheit) - 32) * 5 / 9;
                console.log(`Temperature in Celsius: ${celsius}`);
                rl.close();
            });
            break;
        default:
            console.log("Invalid option. Please enter 1 or 2.");
            rl.close();
            break;
    }
});
