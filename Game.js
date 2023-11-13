function computerChoice() {
  const choices = ["rock", "paper", "scissors", "lizard", "spock"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineWinner(user, computer) {
  if (user === computer) {
    return "It's a tie!";
  }

  if (
    (user === "rock" && (computer === "scissors" || computer === "lizard")) ||
    (user === "paper" && (computer === "rock" || computer === "spock")) ||
    (user === "scissors" && (computer === "paper" || computer === "lizard")) ||
    (user === "lizard" && (computer === "spock" || computer === "paper")) ||
    (user === "spock" && (computer === "scissors" || computer === "rock"))
  ) {
    return "You win!";
  } else {
    return "You lose!";
  }
}

function userChoice(user) {
  const computer = computerChoice();
  document.getElementById(
    "computerText"
  ).innerHTML = `Computer chose: ${computer}`;
  const result = determineWinner(user, computer);
  document.getElementById("result").innerHTML = result;
}
