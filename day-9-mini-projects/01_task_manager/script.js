let tasks = [];

function addTask() {
  let input = document.getElementById("taskInput");
  let value = input.value.trim();
  if (value === "") return;

  tasks.push(value);
  input.value = "";

  let list = document.getElementById("taskList");
  list.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    list.innerHTML += "<li>" + tasks[i] + "</li>";
  }
}
