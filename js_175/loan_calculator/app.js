//APR = 0.05
// Loan amount and duration are variables in query string ->
//http://localhost:3000/?amount=5000&duration=10

//Formula for monthly payment
//let m = p * (j / (1 - Math.pow((1 + j), (-n))));
// m = monthly payment
// p = loan amount
// j = monthly interest rate
// n = loan duration in months

const HTTP = require('http');
const URL = require('url').URL;
const PORT = 3000;
const APR = 5;

const HTML_START = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Loan Calculator</title>
    <style type="text/css">
      body {
        background: rgba(250, 250, 250);
        font-family: sans-serif;
        color: rgb(50, 50, 50);
      }

      article {
        width: 100%;
        max-width: 40rem;
        margin: 0 auto;
        padding: 1rem 2rem;
      }

      h1 {
        font-size: 2.5rem;
        text-align: center;
      }

      table {
        font-size: 2rem;
      }

      th {
        text-align: right;
      }
    </style>
  </head>
  <body>
    <article>
      <h1>Loan Calculator</h1>
      <table>
        <tbody>
`;

const HTML_END = `
        </tbody>
      </table>
    </article>
  </body>
</html>`;

function compileHTML(loanAmount, duration, payment) {
  let body = `
  <tr>
    <th>Amount:</th>
    <td>
      <a href='/?amount=${loanAmount - 100}&duration=${duration}'>- $100</a>
    </td>
    <td>${loanAmount}</td>
    <td>
      <a href='/?amount=${loanAmount + 100}&duration=${duration}'>+ $100</a>
    </td>
  </tr>
  <tr>
    <th>Duration:</th>
    <td>
      <a href='/?amount=${loanAmount}&duration=${duration - 1}'>- 1 year</a>
    </td>
    <td>${duration} years</td>
    <td>
      <a href='/?amount=${loanAmount}&duration=${duration + 1}'>+ 1 year</a>
    </td>
  </tr>
  <tr>
    <th>APR:</th>
    <td colspan='3'>${APR}%</td>
  </tr>
  <tr>
    <th>Monthly payment:</th>
    <td colspan='3'>${payment}</td>
  </tr>
`;

  return HTML_START + body + HTML_END;
}

function getParams(path) {
  let urlLink = new URL(path, `http://localhost:${PORT}`);
  return urlLink.searchParams;
}

function monthlyPayment(loanAmount, durationYears) {
  let monthlyInterestRate = APR / (100 * 12);
  let durationMonths = Number(durationYears) * 12;
  let payment = loanAmount * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), -durationMonths)));
  return payment.toFixed(2);
}

function displayParams(params) {
  let amount = Number(params.get('amount'));
  let durationYears = Number(params.get('duration'));
  let payment = monthlyPayment(amount, durationYears);

  console.log(durationYears)

  return compileHTML(amount, durationYears, payment);
}

const SERVER = HTTP.createServer((req, res) => {
  let method = req.method;
  let path = req.url;

  if (path === '/favicon.ico') {
    res.statusCode = 404;
    res.end();
  } else {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    res.write(displayParams(getParams(path)));
    res.end();
  }
});

//Server is listening for incoming TCP connections
SERVER.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});