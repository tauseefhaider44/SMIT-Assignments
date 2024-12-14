const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Select Heads or Tails..... ', Heads_or_Tails => {
    let random_number = Math.floor(Math.random() * 2); // Randomly generates 0 or 1

    if (random_number === 0 && Heads_or_Tails.toLowerCase() === 'heads') {
        console.log("It's heads ...> You Win....!");
    }
    else if (random_number === 1 && Heads_or_Tails.toLowerCase() === 'tails') {
        console.log("It's tails ...> You Win....!");
    }
    else if (random_number === 0 && Heads_or_Tails.toLowerCase() === 'tails') {
        console.log("It's heads ...> You lose....!");
    }
    else if (random_number === 1 && Heads_or_Tails.toLowerCase() === 'heads') {
        console.log("It's tails ...> You lose....!");
    }
    else {
        console.log("Invalid Input");
    }

    rl.close();
});
