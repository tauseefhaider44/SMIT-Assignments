const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Is the door open .... ? ", door => {
    rl.question("Is the motion detected ....? ", motion => {
        rl.close();
        if (door.toLowerCase() == 'yes' && motion.toLowerCase() == 'yes') {
            console.log("Alarm Triggered.....!")
        }
        else if (door.toLowerCase() == 'yes' && motion.toLowerCase() == 'no') {
            console.log("Alarm Triggered.....!")
        }
        else if (door.toLowerCase() == 'no' && motion.toLowerCase() == 'yes') {
            console.log("Alarm Triggered.....!")
        }
        else if (door.toLowerCase() == 'no' && motion.toLowerCase() == 'no') {
            console.log("All safe.....!")
        }
        else {
            console.log("Invalid Input")
        }

    });
});