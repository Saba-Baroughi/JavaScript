// you should write block two times it is different from onkeydown
let usernameInput = document.querySelector(".username");
let passwordInput = document.querySelector(".password");

let usernameMessage = document.querySelector(".username-Validation");
let passwordMessage = document.querySelector(".password-Validation");

function usernameValidation() {
  // console.log('Blur')
  if (usernameInput.value.length < 12) {
    usernameMessage.innerHTML = "Must Contain 12 Characters (Min)";
    usernameMessage.style.color = "red";
    usernameMessage.style.display = "block"; // you should write block two times it is different from onkeydown
  } else {
    usernameMessage.innerHTML = "Correct username Value";
    usernameMessage.style.color = "green";
    usernameMessage.style.display = "block";
  }
}

function passwordValidation() {
  if (passwordInput.value.length < 8) {
    passwordMessage.innerHTML = "Must Be 8 Characters (Min)";
    passwordMessage.style.color = "red";
    passwordMessage.style.display = "block";
  } else {
    passwordMessage.innerHTML = "Correct Password Value";
    passwordMessage.style.color = "green";
    passwordMessage.style.display = "block";
  }
}
