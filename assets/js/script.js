var formEl = document.querySelector("#task-form");
var taskListEl = document.querySelector("#task-list")

var createTaskHandler = function() {
    event.preventDefault();
    var taskItemEl = document.createElement("li")
    taskItemEl.textContent = "hello"
    taskListEl.appendChild(taskItemEl)
    taskItemEl.className = "task-item"
}

formEl.addEventListener("submit", createTaskHandler);

// When the user clicks the submit button or presses the enter key on their keyboard: {
// prevent the web page from reloading
// Create a variable that targets the user text from the form input box.
// Create a varibale that targets the task type selected in the form dropdown selector
// Create a varible that appends the user text and task type together
// Append this ^ variable with the ul (taskListEl) 
// }