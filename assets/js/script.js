var buttonEl = document.querySelector("#save-task");
var taskListEl = document.querySelector("#task-list")

var createTaskHandler = function() {
    var taskItemEl = document.createElement("li")
    taskItemEl.textContent = "hello"
    taskListEl.appendChild(taskItemEl)
    taskItemEl.className = "task-item"
}

buttonEl.addEventListener("click", createTaskHandler);