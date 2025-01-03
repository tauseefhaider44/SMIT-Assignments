const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter coefficient a: ', (a) => {
    rl.question('Enter coefficient b: ', (b) => {
        rl.question('Enter coefficient c: ', (c) => {
            a = parseFloat(a);
            b = parseFloat(b);
            c = parseFloat(c);
            const discriminant = b * b - 4 * a * c;

            if (discriminant > 0) {
                const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
                const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
                console.log(`Roots: ${root1}, ${root2}`);
            } else if (discriminant === 0) {
                const root = -b / (2 * a);
                console.log(`Root: ${root}`);
            } else {
                console.log('Roots are imaginary');
            }
            rl.close();
        });
    });
});
