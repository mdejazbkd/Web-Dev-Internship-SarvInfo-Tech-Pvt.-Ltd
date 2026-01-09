function calculate(op) {
  let a = Number(document.getElementById("num1").value);
  let b = Number(document.getElementById("num2").value);
  let result;

  if (op === "+") result = a + b;
  else if (op === "-") result = a - b;
  else if (op === "*") result = a * b;
  else if (op === "/") {
    if (b === 0) {
      document.getElementById("output").innerText = "Cannot divide by zero";
      return;
    }
    result = a / b;
  }

  document.getElementById("output").innerText = "Result: " + result;
}
