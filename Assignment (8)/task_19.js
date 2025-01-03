const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter marks in Physics: ', (physics) => {
    rl.question('Enter marks in Chemistry: ', (chemistry) => {
        rl.question('Enter marks in Biology: ', (biology) => {
            rl.question('Enter marks in Mathematics: ', (math) => {
                rl.question('Enter marks in Computer: ', (computer) => {
                    const totalMarks = parseFloat(physics) + parseFloat(chemistry) + parseFloat(biology) + parseFloat(math) + parseFloat(computer);
                    const percentage = (totalMarks / 500) * 100;
                    let grade = '';

                    if (percentage >= 90) grade = 'A';
                    else if (percentage >= 80) grade = 'B';
                    else if (percentage >= 70) grade = 'C';
                    else if (percentage >= 60) grade = 'D';
                    else if (percentage >= 40) grade = 'E';
                    else grade = 'F';

                    console.log(`Percentage: ${percentage.toFixed(2)}, Grade: ${grade}`);
                    rl.close();
                });
            });
        });
    });
});
