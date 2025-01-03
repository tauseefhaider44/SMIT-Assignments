let $10_Note = 10;
let $20_Note = 20;
let $50_Note = 50;
let $100_Note = 100;
let $500_Note = 500;
let $1000_Note = 1000;
let $5000_Note = 5000;

let $10_Note_Count = 0;
let $20_Note_Count = 0;
let $50_Note_Count = 0;
let $100_Note_Count = 0;
let $500_Note_Count = 0;
let $1000_Note_Count = 0;
let $5000_Note_Count = 0;


let x = 200;
while (x > 0) {
    if (x % $100_Note == 0) {
        $100_Note_Count += 1;
        x -= 100;
    }
}
console.log($100_Note_Count);
