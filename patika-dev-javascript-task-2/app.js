const task = document.getElementById("task");
const list = document.getElementById("list");
const toast = document.getElementById("liveToast");
const toastBtn = document.getElementById("toastBtn");
function newElement() {
  if (task.value === "") {
    alert("You can't do this.");
    return;
  }

  const newTask = document.createElement("li");
  const newBtn = document.createElement("btn");
  newTask.innerHTML =
    task.value +
    '<i class="fa-solid fa-xmark" onclick="deleteTask(event)"></i>';
  list.appendChild(newTask);
  task.value = "";
}

document.getElementById("body").addEventListener("click", completeTask);

function deleteTask(event) {
  const target = event.target.parentNode;

  target.remove();
}

function completeTask(event) {
  let targetLi = event.target;
  targetLi.classList.toggle("checked");
}
