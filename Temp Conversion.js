let $ = document;
const firstValue = $.querySelector(".C");
const secondValue = $.querySelector(".F");
const converter = $.getElementById("converter");
const result = $.querySelector(".result");
const convertButton = $.querySelector(".convertButton");
const resetButton = $.querySelector(".resetButton");
const changeButton = $.querySelector(".changeButton");

function convert() {
  if (converter.value === "") {
    result.innerHTML = "Insert correct value";
    result.style.color = "red";
  } else if (isNaN(converter.value)) {
    result.innerHTML = "Insert a Number";
    result.style.color = "red";
  } else {
    if (firstValue.innerHTML === "°C") {
      // as the result provides so many decimels==> tofixed()
      let resultValue = converter.value * 1.8 + 32;
      result.innerHTML =
        converter.value + "°C to " + resultValue.toFixed(2) + "°F";
      result.style.color = "rgb(255, 255, 102)";
    } else {
      let resultValue = (converter.value - 32) * 5.9;
      result.innerHTML =
        converter.value + "°F to " + resultValue.toFixed(2) + "°C";
      result.style.color = "rgb(255, 255, 102)";
    }
  }
}
function reset() {
  // converter.setAttribute('value', '') // converter.value = ''
  // console.log(converter.getAttribute('value'))
  converter.value = "";
  result.innerHTML = "";
}
function swap() {
  // console.log("change");
  if (firstValue.innerHTML === "°C") {
    firstValue.innerHTML = "°F";
    secondValue.innerHTML = "°C";
    converter.setAttribute("placeholder", "°F");
    $.title = "SalzLearn| Js | °F to °C";
  } else {
    firstValue.innerHTML = "°C";
    secondValue.innerHTML = "°F";
    converter.setAttribute("placeholder", "°C");
    $.title = "SalzLearn| Js | °C to °F";
  }
}

convertButton.addEventListener("click", convert);
resetButton.addEventListener("click", reset);
changeButton.addEventListener("click", swap);
