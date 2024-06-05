//getting dom elements
const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const uScoreDisplay = document.getElementById("u-score");
const cScoreDisplay = document.getElementById("c-score");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;
let cScore = 0;
let uScore = 0;

//loop
possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length + 1); //3
  console.log(randomNumber);

  if (randomNumber == 1) {
    computerChoice = "rock";
  }
  if (randomNumber == 2) {
    computerChoice = "scissors";
  }
  if (randomNumber == 3) {
    computerChoice = "paper";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}
function getResult() {
  if (computerChoice === userChoice) {
    result = "Its a Draw!";
  }
  if (computerChoice === "rock" && userChoice === "paper") {
    result = "Great";
    uScore = uScore + 1;
  }
  if (computerChoice === "rock" && userChoice === "scissors") {
    result = "Not Good";
    cScore = cScore + 1;
  }
  if (computerChoice === "paper" && userChoice === "scissors") {
    result = "Great";
    uScore = uScore + 1;
  }
  if (computerChoice === "paper" && userChoice === "rock") {
    result = "Not Good";
    cScore = cScore + 1;
  }
  if (computerChoice === "scissors" && userChoice === "rock") {
    result = "Great";
    uScore = uScore + 1;
  }
  if (computerChoice === "scissors" && userChoice === "paper") {
    result = "Not Good";
    cScore = cScore + 1;
  }
  resultDisplay.innerHTML = result;
  uScoreDisplay.innerHTML = uScore;
  cScoreDisplay.innerHTML = cScore;
}
