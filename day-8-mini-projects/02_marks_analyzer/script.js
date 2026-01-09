let marksArr = [];

function addMarks() {
  let value = Number(document.getElementById("marks").value);
  if (value >= 0 && value <= 100) {
    marksArr.push(value);
  }
  document.getElementById("marks").value = "";
}

function analyze() {
  if (marksArr.length === 0) return;

  let sum = 0;
  let max = marksArr[0];

  for (let i = 0; i < marksArr.length; i++) {
    sum += marksArr[i];
    if (marksArr[i] > max) max = marksArr[i];
  }

  let avg = sum / marksArr.length;

  document.getElementById("result").innerText =
    "Average: " + avg + " | Highest: " + max;
}
