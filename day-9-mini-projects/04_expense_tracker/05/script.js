let total = 0;

function add() {
  let value = Number(document.getElementById("amount").value);
  total += value;

  document.getElementById("total").innerText = "Total: " + total;
  document.getElementById("amount").value = "";
}
