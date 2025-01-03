const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter Basic Salary: ', (basicSalary) => {
    basicSalary = parseFloat(basicSalary);
    let hra, da;

    if (basicSalary <= 10000) {
        hra = basicSalary * 0.20;
        da = basicSalary * 0.80;
    } else if (basicSalary <= 20000) {
        hra = basicSalary * 0.25;
        da = basicSalary * 0.90;
    } else {
        hra = basicSalary * 0.30;
        da = basicSalary * 0.95;
    }

    const grossSalary = basicSalary + hra + da;
    console.log(`Gross Salary: ${grossSalary.toFixed(2)}`);
    rl.close();
});
