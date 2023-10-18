let usernameMessage = document.querySelector(".username-Validation");
let passwordMessage = document.querySelector(".password-Validation");

let usernameInput = document.querySelector(".username");
let passwordInput = document.querySelector(".password");

function usernameValidation() {
  if (usernameInput.value.length < 12) {
    usernameMessage.style.color = "red";
    usernameMessage.style.display = "block";
    usernameMessage.innerHTML = "It should be 12";
  } else {
    usernameMessage.style.color = "green";
    usernameMessage.innerHTML = "Correct value";
  }
}
function passwordValidation() {
  if (passwordInput.value.length < 8) {
    passwordMessage.style.color = "red";
    passwordMessage.style.display = "block";
    passwordMessage.innerHTML = "It should be 8";
  } else {
    passwordMessage.style.color = "green";
    passwordMessage.innerHTML = "Correct value";
  }
}
