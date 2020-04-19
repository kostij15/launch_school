const READLINE = require('readline-sync');

function total(bill, tipPercent) {
    tipOwed = bill * tipPercent / 100;
    bill += tipOwed
    console.log(`The tip is \$${tipOwed.toFixed(2)}`);
    console.log(`The total is \$${bill.toFixed(2)}`);
}

console.log('What is the bill?');
bill = READLINE.question();

console.log('What is the tip percentage?');
tip = READLINE.question();

total(parseFloat(bill), parseFloat(tip));