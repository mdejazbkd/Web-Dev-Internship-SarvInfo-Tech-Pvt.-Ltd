function randomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function generate() {
  let container = document.getElementById("palette");
  container.innerHTML = "";

  for (let i = 0; i < 5; i++) {
    let div = document.createElement("div");
    div.className = "color";
    div.style.backgroundColor = randomColor();
    container.appendChild(div);
  }
}
