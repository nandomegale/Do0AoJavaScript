const taskInputElement = document.getElementById("taskInput");

let tasks = [];

const taskList = document.getElementById("taskList");

function addNewTaskButton() {
    let taskInputValue = taskInputElement.value;
    addNewTask(taskInputValue);
    clearInputValue();
    //console.log(tasks);
    addTaskHTML(taskInputValue);
}

function addNewTask(taskInputValue) {
    tasks.push(taskInputValue);
}

function clearInputValue() {
    taskInputElement.value = "";
}

function addTaskHTML(taskInputValue) {
    document.querySelector("small").classList.remove("show");
    const li = document.createElement("li");
    li.className = "taskCreated";
    const label = document.createElement("label");
    const span = document.createElement("span");
    span.className = "taskCreatedTitle";
    span.innerText = taskInputValue;
    label.appendChild(span);
    li.appendChild(label);
    taskList.appendChild(li);
}

document.addEventListener('keydown', event => {
    if (event.key === 'Enter'){
        addNewTaskButton();
    }
})