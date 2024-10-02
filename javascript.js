// This program keeps the inputs as string and compares those strings
const options = ["Rock", "Paper", "Scissors"];
function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}

const stats = document.getElementById("msg");
let newLine = document.createElement("p");
let record = document.createElement("p");
stats.appendChild(newLine);
stats.appendChild(record);

let humanScore = 0;
let computerScore = 0;

function playRound() {
  let human = options.indexOf(event.target.textContent);
  let cpu = getComputerChoice();

  if (cpu == human) {
    let message = "It was a tie!";
    updateDisplay(human, cpu, message);
  } else if (cpu + 1 == human) {
    let message = "You won!";
    humanScore++;
    updateDisplay(human, cpu, message);
  } else if (human + 1 == cpu) {
    let message = "You lost.";
    computerScore++;
    updateDisplay(human, cpu, message);
  } else if (cpu + 2 == human) {
    let message = "You lost.";
    computerScore++;
    updateDisplay(human, cpu, message);
  } else if (human + 2 == cpu) {
    let message = "You won!";
    humanScore++;
    updateDisplay(human, cpu, message);
  }
}

let updateDisplay = (humanChoice, cpuChoice, userMsg) => {
  newLine.textContent = `It was your ${options[humanChoice]} versus the computer's ${options[cpuChoice]}. ${userMsg}`;

  if (humanScore == 5) {
    record.textContent = `You beat the computer ${humanScore} to ${computerScore}. Click an option to restart.`;
    humanScore = 0;
    computerScore = 0;
    return;
  } else if (computerScore == 5) {
    record.textContent = `The computer beat you ${humanScore} to ${computerScore}. Click an option to restart.`;
    humanScore = 0;
    computerScore = 0;
    return;
  }

  if (humanScore > computerScore) {
    record.textContent = `You are currently beating the computer ${humanScore} to ${computerScore}`;
  } else if (humanScore < computerScore) {
    record.textContent = `You are currently losing to the computer ${humanScore} to ${computerScore}`;
  } else {
    record.textContent = `You and the computer are currently tied ${humanScore} to ${computerScore}`;
  }
};

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

rock.addEventListener("click", playRound);
paper.addEventListener("click", playRound);
scissors.addEventListener("click", playRound);
