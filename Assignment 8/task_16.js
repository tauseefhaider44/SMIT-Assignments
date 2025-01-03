const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Enter the first side : ", side_1 => {
    rl.question("Enter the second side : ", side_2 => {
        rl.question("Enter the third side : ", side_3 => {
            rl.close();
            side_1 = parseFloat(side_1);
            side_2 = parseFloat(side_2);
            side_3 = parseFloat(side_3);
            if (side_1 == side_2 == side_3) {
                console.log("This is an Equilateral tringle...");
            }
            else if (side_1 == side_2 || side_2 == side_3 || side_3 == side_1) {
                console.log("This is an isosceles tringle...");
            }
            else if (side_1 != side_2 !== side_3 != side_1) {
                console.log("This is scalene triangle...")
            }
        })
    })
})