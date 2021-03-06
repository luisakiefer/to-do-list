window.addEventListener("load", () => {
  let form = document.querySelector("#new-task-form");
  let input = document.querySelector("#new-task-input");
  let list = document.querySelector("#tasks");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    let task = input.value;

    let taskItem = document.createElement("div");
    taskItem.classList.add("task");

    let taskContent = document.createElement("div");
    taskContent.classList.add("content");

    taskItem.appendChild(taskContent);

    let taskInput = document.createElement("input");
    taskInput.classList.add("text");
    taskInput.type = "text";
    taskInput.value = task;
    taskInput.setAttribute("readonly", "readonly");

    taskContent.appendChild(taskInput);

    let taskActions = document.createElement("div");
    taskActions.classList.add("actions");

    let checkBox = document.createElement("input");
    checkBox.classList.add("checkbox");
    checkBox.type = "checkbox";

    let taskEdit = document.createElement("button");
    taskEdit.classList.add("edit");
    taskEdit.innerText = "Editar";

    let taskDelete = document.createElement("button");
    taskDelete.classList.add("delete");
    taskDelete.innerText = "Apagar";

    taskActions.appendChild(checkBox);
    taskActions.appendChild(taskEdit);
    taskActions.appendChild(taskDelete);

    taskItem.appendChild(taskActions);

    list.appendChild(taskItem);

    input.value = "";

    taskEdit.addEventListener("click", () => {
      if (taskEdit.innerText.toLowerCase() == "editar") {
        taskInput.removeAttribute("readonly");
        taskInput.focus();
        taskEdit.innerText = "Salvar";
      } else {
        taskEdit.innerText = "Editar";
        taskInput.setAttribute("readonly", "readonly");
      }
    });

    taskDelete.addEventListener("click", (event) => {
      list.removeChild(taskItem);
    });

    checkBox.addEventListener("change", function () {
      if (this.checked) {
        alert("Muito bem! Não há nada melhor do que riscar uma atividade da lista!");
      }
    });

  });
});
