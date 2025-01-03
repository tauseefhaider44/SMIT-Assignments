const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Enter the first angle : ", angle_1 => {
    rl.question("Enter the second angle : ", angle_2 => {
        rl.question("Enter the third angle : ", angle_3 => {
            rl.close();
            angle_1 = parseFloat(angle_1);
            angle_2 = parseFloat(angle_2);
            angle_3 = parseFloat(angle_3);
            if (angle_1 + angle_2 + angle_3 == 180) {
                console.log("This is a vaid tringle...");
            }
            else {
                console.log("This is not a valid tringle...");
            }
        })
    })
})