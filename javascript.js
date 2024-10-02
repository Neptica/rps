// This program keeps the inputs as string and compares those strings
const options = ["Rock", "Paper", "Scissors"];
function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}

function getHumanChoice() {
  return prompt("Rock [1], Paper [2], or scissors [3]?");
}

let humanScore = 0;
let computerScore = 0;

function playRound(human, cpu) {
  console.log(
    `It was your ${options[human]} versus the computer's ${options[cpu]}`,
  );

  if (cpu == human) {
    console.log("It was a tie!");
  } else if (cpu + 1 == human) {
    console.log("You beat the computer!");
    return 1;
  } else if (human + 1 == cpu) {
    console.log("You lost to the console.");
    return -1;
  } else if (cpu + 2 == human) {
    console.log("You lost to the console.");
    return -1;
  } else if (human + 2 == cpu) {
    console.log("You beat the computer!");
    return 1;
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    let win = playRound(humanSelection, computerSelection);
    if (win == 1) humanScore++;
    else if (win == -1) computerScore++;
    console.log(
      `The score of this game is your ${humanScore} wins to the computer's ${computerScore} wins`,
    );
  }
}
