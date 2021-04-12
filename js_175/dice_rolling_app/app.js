const HTTP = require('http');
const URL = require('url').URL;
const PORT = 3000;

function dieRoll(sides) {
  return Math.floor(Math.random() * sides);
}

function diceNumber(urlParams) {
  let numSides = urlParams.get('sides');
  let rolls = urlParams.get('rolls');
  let messageBody = '';

  for (let rollNum = 1; rollNum <= rolls; rollNum++) {
    messageBody += `Rolled a ${dieRoll(numSides)}\n`;
  }

  return messageBody;
}

function getParams(path) {
  let urlLink = new URL(path, `http://localhost:${PORT}`);
  return urlLink.searchParams;
}

const SERVER = HTTP.createServer((req, res) => {
  let method = req.method;
  let path = req.url;

  if (path === '/favicon.ico') {
    res.statusCode = 404;
    res.end();
  } else {
    let urlParams = getParams(path);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write(`${method} ${path}\n`);
    res.write(diceNumber(urlParams));
    res.end();
  }
});

//Server is listening for incoming TCP connections
SERVER.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});