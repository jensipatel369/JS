let count = 0;

function update(){
  document.getElementById("counter").innerText = count;
}
function increment(){
  count++;
  update();
}
function decrement(){
  count--;
  update();
}
function reset(){
  count = 0;
  update();
}