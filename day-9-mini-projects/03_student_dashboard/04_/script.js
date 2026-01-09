let students = ["Aman", "Riya", "Neha", "Karan"];

let container = document.getElementById("container");

for (let i = 0; i < students.length; i++) {
  let div = document.createElement("div");
  div.className = "card";
  div.innerText = students[i];
  container.appendChild(div);
}
