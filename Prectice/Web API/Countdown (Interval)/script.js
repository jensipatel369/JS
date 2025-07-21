let timeLeft = 5;
let count = document.getElementById("countdown");
count.textContent = `Time left: ${timeLeft}`;
let interval = setInterval(() => {
  timeLeft--;
  count.textContent = `Time left: ${timeLeft}`;
}, 1000);
setTimeout(() => {
  clearInterval(interval);
  count.textContent = "Time's up!";
}, 6000);