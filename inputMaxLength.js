let inputElem = document.querySelector("input");
let maxLengthAtt = inputElem.getAttribute("maxLength"); //19
let spanElem = document.querySelector("span");

inputElem.addEventListener("keydown", function writingWord() {
  spanElem.innerHTML = maxLengthAtt - inputElem.value.length;
}); //19-7
