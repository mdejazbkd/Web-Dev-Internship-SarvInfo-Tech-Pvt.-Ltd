function updateProfile() {
  let name = document.getElementById("inputName").value;
  let role = document.getElementById("inputRole").value;

  document.getElementById("name").innerText = name;
  document.getElementById("role").innerText = role;
}

function changeTheme() {
  document.querySelector(".card").style.backgroundColor = "#333";
  document.querySelector(".card").style.color = "white";
}
