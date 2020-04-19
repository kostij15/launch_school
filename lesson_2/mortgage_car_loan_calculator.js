const readline = require('readline-sync');

function isInvalidNumber(num) {
    return num.trim() === '' || Number.isNaN(Number(num)) || Number(num) < 0;
}

function isValidResponse(response) {
    return response.toLowerCase() === 'y' || response.toLowerCase() === 'n';
}

let performCalculation = true;

while (performCalculation) {

    console.log('Hi, what is total loan amount?');
    let loanAmount = readline.question();
    while (isInvalidNumber(loanAmount)) {
        console.log("I'm sorry you've entered an incorrect amount.\nPlease try again");
        loanAmount = readline.question();
    }

    console.log('What is your current Annual Percentage Rate (APR)?\nPlease enter percentage as a whole number e.g. 2% === 2');
    let apr = readline.question();
    while (isInvalidNumber(apr)) {
        console.log("I'm sorry you've entered an incorrect amount.\nPlease try again");
        apr = readline.question();
    }

    console.log('What is your current loans duration?\nPlease enter in years\n e.g. 6 months == .75');
    let loanDuration = readline.question();
    while (isInvalidNumber(loanDuration)) {
        console.log("I'm sorry you've entered an incorrect amount.\nPlease try again");
        loanDuration = readline.question();
    }

    //Converting APR to Monthly
    apr = Number(apr) / 100;
    apr = apr / 12;

    //Converting loanDuration into months
    loanDuration = Number(loanDuration);
    loanDuration *= 12;

    let answer = loanAmount * (apr / (1 - Math.pow(1 + apr, -loanDuration)));
    console.log(`Your monthly payments will be \$${answer.toFixed(2)}`);

    console.log("Would you like to perform another Monthly Mortgage Payment Calculation?\n1) y\n2) n");
    let response = readline.question();

    while (!isValidResponse(response)) {
        console.log("Please enter the following:\n1) y\n2) n");
        response = readline.question();
    }

    if (response === 'y') {
        performCalculation = true;
    } else {
        performCalculation = false;
    }

}