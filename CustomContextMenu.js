let contextMenu = document.getElementById("contextMenu");
function contextHandler(event) {
  event.preventDefault();
  if (contextMenu.style.display === "none") {
    contextMenu.style.display = "block";
    contextMenu.style.top = event.pageY + "px";
    contextMenu.style.left = event.pageX + "px";
  } else {
    // when it appeae even if I right clicked another
    // places still open with different pageX and pageY
    contextMenu.style.top = event.pageY + "px";
    contextMenu.style.left = event.pageX + "px";
  }
}
function clickContextMenu() {
  contextMenu.style.display = "none";
}
function keyDownHandler(event) {
  //the keyCode ofScape=27
  if (event.keyCode === 27) {
    contextMenu.style.display = "none";
  }
}
document.body.addEventListener("contextmenu", contextHandler);
document.body.addEventListener("click", clickContextMenu);
document.body.addEventListener("keydown", keyDownHandler);
