const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Enter the Month Number : ", month_number => {
    rl.close();

    month_number = parseInt(month_number);
    let daysInMonth;

    switch (month_number) {
        case 1:
            daysInMonth = 31;
            console.log("January has " + daysInMonth + " days.");
            break;
        case 2:
            daysInMonth = 28;
            console.log("February has " + daysInMonth + " days.");
            break;
        case 3:
            daysInMonth = 31;
            console.log("March has " + daysInMonth + " days.");
            break;
        case 4:
            daysInMonth = 30;
            console.log("April has " + daysInMonth + " days.");
            break;
        case 5:
            daysInMonth = 31;
            console.log("May has " + daysInMonth + " days.");
            break;
        case 6:
            daysInMonth = 30;
            console.log("June has " + daysInMonth + " days.");
            break;
        case 7:
            daysInMonth = 31;
            console.log("July has " + daysInMonth + " days.");
            break;
        case 8:
            daysInMonth = 31;
            console.log("August has " + daysInMonth + " days.");
            break;
        case 9:
            daysInMonth = 30;
            console.log("September has " + daysInMonth + " days.");
            break;
        case 10:
            daysInMonth = 31;
            console.log("October has " + daysInMonth + " days.");
            break;
        case 11:
            daysInMonth = 30;
            console.log("November has " + daysInMonth + " days.");
            break;
        case 12:
            daysInMonth = 31;
            console.log("December has " + daysInMonth + " days.");
            break;
        default:
            console.log("Invalid Input");
            break;
    }
});