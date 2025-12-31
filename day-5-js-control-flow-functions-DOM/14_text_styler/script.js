function showText() {
  let text = document.getElementById("textInput").value;
  document.getElementById("output").innerText = text;
}

function makeBold() {
  document.getElementById("output").style.fontWeight = "bold";
}

function changeColor() {
  document.getElementById("output").style.color = "blue";
}

function clearText() {
  document.getElementById("output").innerText = "";
  document.getElementById("textInput").value = "";
}
