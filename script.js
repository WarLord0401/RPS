const x = document.getElementById("user-choice");
const y = document.getElementById("computer-choice");
const res = document.getElementById("result");
const playGame = (userChoice) => {
  const computerChoice = calcComputerChoice();
  userChoice = userChoice.title;

  if (userChoice === "rock") {
    x.className = "text-[#907040]";
  } else if (userChoice === "paper") {
    x.className = "text-pink-400";
  } else {
    x.className = "text-blue-400";
  }
  x.innerHTML = userChoice;

  y.innerHTML = computerChoice;
  if (computerChoice === "rock") {
    y.className = "text-[#907040]";
  } else if (computerChoice === "paper") {
    y.className = "text-pink-400";
  } else {
    y.className = "text-blue-400";
  }
  y.innerHTML = computerChoice;

  getResult(userChoice, computerChoice);
};

const calcComputerChoice = () => {
  const choice = Math.random();
  if (choice < 0.34) {
    return "rock";
  } else if (choice < 0.67) {
    return "paper";
  } else {
    return "scissors";
  }
};

const getResult = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    res.innerHTML = "DRAW...";
    res.style.color = "#ddb365ff";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    res.innerHTML = "YOU WIN!";
    res.style.color = "#6eff70ff";
  } else {
    res.innerHTML = "YOU LOSE :(";
    res.style.color = "#ff6e6eff";
  }
};
