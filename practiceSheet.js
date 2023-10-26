let $ = document;
let inputElem = $.querySelector("input");
let todoUlElem = $.querySelector("ul");
let addTodoForm = $.querySelector(".add");

function addNewTodo(newTodoValue) {
  let newTodoTrash = $.createElement("i");
  let newTodoTitleSpan = $.createElement("span");
  let newTodoLi = $.createElement("li");
  newTodoLi.className =
    "list-group-item d-flex justify-content-between align-items-center";
  newTodoTitleSpan.innerHTML = newTodoValue;
  newTodoTrash.className = "fa fa-trash-o delete";
  newTodoLi.append(newTodoTitleSpan, newTodoTrash);
  todoUlElem.append(newTodoLi);

  console.log(newTodoLi);
  newTodoTrash.addEventListener("click", function (event) {
    event.target.parentElement.remove();
  });
}

addTodoForm.addEventListener("submit", function (event) {
  event.preventDefault();
});

inputElem.addEventListener("keydown", function (event) {
  let newTodoValue = event.target.value.trim();
  if (event.keyCode === 13) {
    if (newTodoValue) {
      addNewTodo(newTodoValue);
      inputElem.value = "";
    }
  }
});
