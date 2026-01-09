let tasks = [];

function addTask() {
  let task = document.getElementById("task").value;

  if (task === "") return;

  tasks.push(task);
  document.getElementById("task").value = "";

  let list = document.getElementById("list");
  list.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    list.innerHTML += "<li>" + tasks[i] + "</li>";
  }
}
