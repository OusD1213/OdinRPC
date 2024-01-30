const computerSelection = () => {
  const options = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * options.length);
  const randomChoice = options[random];
  return randomChoice.toUpperCase();
};

const playerSelection = () => {
  const playerChoice = prompt("Choose between rock-paper-scissors");
  return playerChoice.toUpperCase();
};

const playRound = (computerSelection, playerSelection, playerScore) => {
  if (computerSelection == playerSelection) {
    console.log("It was a tie");
  } else if (computerSelection == "ROCK") {
    if (playerSelection == "PAPER") {
      console.log("You win! Paper beats Rock");
      playerScore += 1;
    } else {
      console.log("You lost! Rock beats Scissors");
    }
  } else if (computerSelection == "PAPER") {
    if (playerSelection == "ROCK") {
      console.log("You lost. Paper beats Rock");
    } else {
      console.log("You win! Scissors beats Paper");
      playerScore += 1;
    }
  } else if (computerSelection == "SCISSORS") {
    if (playerSelection == "PAPER") {
      console.log("You lost. Scissors beat Paper");
    } else {
      console.log("You win! Rock beats Scissors");
      playerScore += 1;
    }
  }
  return playerScore;
};
const game = () => {
  let playerScore = 0;
  for (let round = 0; round < 5; round++) {
    playerScore = playRound(
      playerSelection(),
      computerSelection(),
      playerScore
    );
  }

  if (playerScore >= 3) {
    console.log(`You Won with a score of :${playerScore}/5 !!!!`);
  } else {
    console.log(`You Lost with a score of ${playerScore}/5 =(`);
  }
};
game();
