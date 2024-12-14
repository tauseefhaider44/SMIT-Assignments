const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Player 1 Select the One (Rock, Paper, or Scissor): ", (User1) => {
    rl.question("Player 2 Select the One (Rock, Paper, or Scissor): ", (User2) => {
        rl.close();

        if (User1.toLowerCase() === User2.toLowerCase()) {
            console.log("It's a tie....!");
        } else if (
            (User1.toLowerCase() === 'paper' && User2.toLowerCase() === 'scissor') ||
            (User1.toLowerCase() === 'rock' && User2.toLowerCase() === 'paper') ||
            (User1.toLowerCase() === 'scissor' && User2.toLowerCase() === 'rock')
        ) {
            console.log("Player 2 Wins....!");
        } else if (
            (User1.toLowerCase() === 'scissor' && User2.toLowerCase() === 'paper') ||
            (User1.toLowerCase() === 'rock' && User2.toLowerCase() === 'scissor') ||
            (User1.toLowerCase() === 'paper' && User2.toLowerCase() === 'rock')
        ) {
            console.log("Player 1 Wins....!");
        } else {
            console.log("Invalid Input.....!");
        }
    });
});
