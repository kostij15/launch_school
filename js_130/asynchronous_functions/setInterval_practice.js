//1. startCounting
//logs a number to the console every second, starting with 1
function startCounting() {
  let count = 1;

  let id = setInterval(function () {
    console.log(count);
    count += 1;
  }, 1000);

  return id;

}

let id = startCounting();

//2. stopCounting

function stopCounting(id) {
  clearInterval(id);
}

stopCounting(id);