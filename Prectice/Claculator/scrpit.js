let input = "";
let display = document.getElementById("display");

function get(char) {
  input = input + char;
  display.innerHTML = input;
}

function clearDisplay() {
  input = "";
  display.innerHTML = "0";
}

function calculate() {
  let oprator = "";
  if (input.includes("+")) {
    oprator = "+";
  } else if (input.includes("-")) {
    oprator = "-";
  } else if (input.includes("*")) {
    oprator = "*";
  } else if (input.includes("/")) {
    oprator = "/";
  } else if (input.includes("%")) {
    oprator = "%";
  } else {
    display.innerHTML = "Error";
    return;
  }

  let parts = input.split(oprator);
  let a = parts[0] * 1;
  let b = parts[1] * 1;
  let result = 0;

  switch (oprator) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      result = a / b;
      break;
    case "%":
      result = a % b;
      break;
  }

  input = result + "";
  display.innerHTML = result;
}
