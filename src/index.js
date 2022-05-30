// get value from input
// display the value inside UL
// add a checkbox - when checked move to "Done"
// add a delete button

function createTask() {
  let li = document.querySelector("#task");
  li.innerHTML = `${task.value}`;
}

function newTask(event) {
  event.preventDefault();
  let task = document.querySelector("#taskToDo");
  alert(`${task.value}`);
  createTask(task.value);
}

let addTaskButton = document.querySelector("#submitButton");
addTaskButton.addEventListener("click", newTask);
