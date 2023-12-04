let inputElem = document.querySelector("input");
let maxLengthAtt = inputElem.getAttribute("maxLength"); //19
let spanElem = document.querySelector("span");

inputElem.addEventListener("keyup", function writingWord() {
  spanElem.innerHTML = maxLengthAtt - inputElem.value.length;
}); //19-7
//as keydown press is one caracther behind of
//keypress and keyup we are, there is a bug  so we are usin
//keypress or keyup
