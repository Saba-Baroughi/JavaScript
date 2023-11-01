let inputElem = document.getElementById("inputtest");
let textareaElem = document.getElementById("test2");
function inputSelect() {
  console.log("selected");
}
function textareaSelect(event) {
  console.log(event);
}
inputElem.addEventListener("select", inputSelect);
textareaElem.addEventListener("select", textareaSelect);
