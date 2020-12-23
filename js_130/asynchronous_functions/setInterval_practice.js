//1.

function startCounting() {
  let start = 1;

  function increment() {
    console.log(start);
    start += 1;
  }

  let counterId = setInterval(increment, 1000);

  return counterId;
}

function stopCounting(id) {
  clearInterval(id);
}

let id = startCounting();

stopCounting(id);