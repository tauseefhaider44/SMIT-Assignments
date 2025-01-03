const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter electricity units consumed: ', (units) => {
    units = parseFloat(units);
    let bill = 0;

    if (units <= 50) {
        for (let i = 0; i < units; i++) {
            bill += 0.50;
        }
    } else if (units <= 150) {
        for (let i = 0; i < 50; i++) {
            bill += 0.50;
        }
        for (let i = 50; i < units; i++) {
            bill += 0.75;
        }
    } else if (units <= 250) {
        for (let i = 0; i < 50; i++) {
            bill += 0.50;
        }
        for (let i = 50; i < 150; i++) {
            bill += 0.75;
        }
        for (let i = 150; i < units; i++) {
            bill += 1.20;
        }
    } else {
        for (let i = 0; i < 50; i++) {
            bill += 0.50;
        }
        for (let i = 50; i < 150; i++) {
            bill += 0.75;
        }
        for (let i = 150; i < 250; i++) {
            bill += 1.20;
        }
        for (let i = 250; i < units; i++) {
            bill += 1.50;
        }
    }

    let surcharge = 0;
    for (let i = 0; i < bill * 0.20; i += 0.01) {
        surcharge += 0.01;
    }

    bill += surcharge;

    console.log(`Total Electricity Bill: ${bill.toFixed(2)}`);
    rl.close();
});
