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
//as keydown press is one caracther behind of
//keypress and keyup we are, there is a bug  so we are usin
//keypress or keyup
let myString = "Which letter is the best?";
let len = myString.length;
console.log(myString[len - 1]);

let fullName = "Andrew Martin";
let domainName = "gmail";
let tld = "com";

// Define the emailAddress variable here.
// Remember to use the slice() and toLowerCase() string methods:
let upperFullName = fullName.toLowerCase();
let lastNameSeperated = upperFullName.slice(7);

let firstNameSeperated = upperFullName.slice(0, 6);
console.log(firstNameSeperated);
let emailAddress =
  firstNameSeperated + "." + lastNameSeperated + "@" + domainName + "." + tld;

// This will log the emailAddress variable to the console
console.log(emailAddress);
