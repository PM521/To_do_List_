var tasks = [];

var taskInput = document.getElementById("taskInput");
var addTaskBtn = document.getElementById("addTaskBtn");
var taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", addTask);
taskList.addEventListener("click", deleteTask);

function addTask() {
  var taskText = taskInput.value.trim();
  if (taskText !== "") {
    var task = {
      text: taskText,
      completed: false
    };
    tasks.push(task);
    renderTasks();
    taskInput.value = "";
  }
}


function deleteTask(event) {
  if (event.target.classList.contains("deleteBtn")) {
    var index = event.target.dataset.index;
    tasks.splice(index, 2);
    renderTasks();
  }
}


function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach(function (task, index) {
    var li = document.createElement("li");
    var textSpan = document.createElement("span");
    textSpan.innerText = task.text;
    li.appendChild(textSpan);
    var deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.setAttribute("data-index", index);
    li.appendChild(deleteBtn);
    if (task.completed) {
      li.classList.add("completed");
    }
    taskList.appendChild(li);
  });
}
renderTasks();
