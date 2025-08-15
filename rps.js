console.log("Rock Paper Scissors Game");
function playGame() {
  let humanScore = 0;
  let computerScore = 0;



// Function to get the computer's choice
function getComputerChoice() {
  let randomNumber = Math.random() * 100; // gives a number random nummber between 0 and 100
  
  if (randomNumber < 34) {
    return "rock";
  } else if (randomNumber < 67) {
    return "paper";
  } else {
    return "scissors";
  }
}

// console.log(getComputerChoice());


// Function to get the human player's choice
function getHumanChoice() {
  let choice = prompt("Enter rock, paper, or scissors:");
  return choice;
}


// console.log(getHumanChoice());

function playRound(humanChoice, computerChoice) {
  // Make human choice case-insensitive
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
  } 
  else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(`You win!`);
    humanScore++;
  } 
  else {
    console.log(`You lose!`);
    computerScore++;
  }
}

for (let i = 1; i <= 5; i++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }

  if (humanScore > computerScore) {
    console.log(`You win the game! Final Score: ${humanScore} - ${computerScore}`);
  } else if (humanScore < computerScore) {
    console.log(`Computer wins the game! Final Score: ${humanScore} - ${computerScore}`);
  } else {
    console.log(`It's a tie game! Final Score: ${humanScore} - ${computerScore}`);
  }

}

  playGame();
