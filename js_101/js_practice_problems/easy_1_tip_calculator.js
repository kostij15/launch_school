const READLINE = require('readline-sync');

function total(bill, tipPercent) {
    tipOwed = bill * tipPercent / 100;
    bill += tipOwed
    console.log(`The tip is \$${tipOwed.toFixed(2)}`);
    console.log(`The total is \$${bill.toFixed(2)}`);
}

bill = +READLINE.question('What is the bill? ');

tip = +READLINE.question('What is the tip percentage? ');

total(bill, tip);