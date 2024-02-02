let $ = document;
let modalParent = $.getElementsByClassName("modal-parent")[0];
let button = $.querySelector("button");
let span = $.querySelector("span");
let sectionElem = $.querySelector("section");

button.addEventListener("click", function () {
  modalParent.style.display = "block";
  sectionElem.style.filter = "blur(10px)";
  button.blur();
  //   when we close the modal with the ESC key, on the button there is a
  // white border to remove it we use blur method
});
span.addEventListener("click", () => {
  modalParent.style.display = "none";
  sectionElem.style.filter = "blur(0px)";
});
function keyDownHandler(event) {
  if (event.keyCode === 27) {
    modalParent.style.display = "none";
    sectionElem.style.filter = "blur(0px)";
  }
}
document.body.addEventListener("keydown", keyDownHandler);
