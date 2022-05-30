window.addEventListener("load", () => {
  let form = document.querySelector("#new-task-form");
  let input = document.querySelector("#new-task-input");
  let list = document.querySelector("#tasks");

  console.log(form);

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

    let taskEdit = document.createElement("button");
    taskEdit.classList.add("edit");
    taskEdit.innerTect = "Editar";

    let taskDelete = documente.createElement("button");
    taskDelete.classList.add("delete");
    taskDelete.innerText = "Deletar";

    taskActions.appendChild(taskEdit);
    taskActions.appendChild(taskDelete);

    taskItem.appendChild(taskActions);

    list.appendChild(taskItem);

    input.value = "";

    taskEdit.addEventListener("click", (event) => {
      if (taskEdit.innerText.toLowerCase() == "edit") {
        taskEdit.innerText = "Salvar";
        taskInput.removeAttribute("readonly");
        taskInput.focus();
      } else {
        taskEdit.innerText = "Editar";
        taskInput.setAttribute("readonly", "readonly");
      }
    });

    taskDelete.addEventListener("click", (event) => {
      list.removeChild(taskItem);
    });
  });
});
