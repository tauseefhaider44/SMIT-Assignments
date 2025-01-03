const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter cost price: ', (cp) => {
    rl.question('Enter selling price: ', (sp) => {
        cp = parseFloat(cp);
        sp = parseFloat(sp);
        if (sp > cp) {
            console.log(`Profit: ${sp - cp}`);
        } else if (cp > sp) {
            console.log(`Loss: ${cp - sp}`);
        } else {
            console.log('No Profit No Loss');
        }
        rl.close();
    });
});
