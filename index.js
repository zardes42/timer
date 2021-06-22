let time = setInterval(timer, 1000);
let count = 0;
let hr = 0;
let min = 30;
console.log(`${hr} hr ${min}min ${count}secs`);

function timer() {
  count = count - 1;

  if (count < 0) {
    min = min - 1;
    count = 59;
  }
  if (min < 0) {
    hr -= 1;
    min = 59;
  }
  if (hr === 0 && min === 0 && count === 0) {
    clearInterval(time);
  }
  console.log(`${hr} hr ${min}min ${count}secs`);
}
