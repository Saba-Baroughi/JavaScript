// firstly get input
let $ = document;
let addTodoForm = $.querySelector("form");
let inputElem = $.querySelector("input");
let todoUlElem = $.querySelector("ul");
//parameter allows to add as much as you can otherwise we could not add more than once
function addNewToDo(newTodoValue) {
  //firstly create the li since it is parent of other elements
  let newTodoLi = $.createElement("li");
  newTodoLi.className =
    "list-group-item d-flex justify-content-between align-items-center";
  console.log(newTodoLi);
  todoUlElem.append(newTodoLi);
  let newTodoTitleSpan = $.createElement("span");
  newTodoTitleSpan.innerHTML = newTodoValue;
  let newTodoTrash = $.createElement("i");
  newTodoTrash.className = "fa fa-trash-o delete";
  newTodoLi.append(newTodoTitleSpan, newTodoTrash);
  newTodoTrash.addEventListener("click", function (event) {
    event.target.parentElement.remove();
  });
}

console.log(inputElem);
// here press Enter acts as submit because input is inside the Form,
//if we give input the preventDefault it doesn not work we shoulf give the form
// here even if Submit can not do refresh the page
addTodoForm.addEventListener("submit", function (event) {
  event.preventDefault();
});
inputElem.addEventListener("keydown", function (event) {
  let newTodoValue = event.target.value.trim();
  console.log(event);
  if (event.keyCode === 13) {
    if (newTodoValue) {
      inputElem.value = ""; // To erase what user write and instead of erasing it
      addNewToDo(newTodoValue);
    }
  }
});
