divElem = document.getElementById("box");
btnElem = document.getElementById("btn");

function mouseMoveHandler() {
  console.log("Mouse Move");
}
function removeHandler() {
  divElem.removeEventListener("mousemove", mouseMoveHandler);
}

divElem.addEventListener("mousemove", mouseMoveHandler);
btnElem.addEventListener("click", removeHandler);
