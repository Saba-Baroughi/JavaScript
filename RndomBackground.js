// console.log(document.body)

// let colorsArray = ['red', 'yellow', 'blue', 'green', 'pink', 'gray']
// let randomColorIndex

// setInterval(function () {
//     randomColorIndex = Math.floor(Math.random() * colorsArray.length)
//     document.body.style.backgroundColor = colorsArray[randomColorIndex]
// }, 2000)

//////  Second Way  //////

let redValue, greenValue, blueValue;

setInterval(function () {
  redValue = Math.floor(Math.random() * 225);
  greenValue = Math.floor(Math.random() * 225);
  blueValue = Math.floor(Math.random() * 225);
  console.log("rgb(" + redValue + "," + greenValue + "," + blueValue + ")");
  document.body.style.background =
    "rgb(" + redValue + "," + greenValue + "," + blueValue + ")";
}, 2000);
