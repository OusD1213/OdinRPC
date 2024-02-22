const computerSelection = () => {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)].toUpperCase();
};

const playRound = (computerSelection, playerSelection, playerScore) => {
  const writeResults = document.querySelector('div');
  const writing = document.createElement('p');
  
  if (computerSelection == playerSelection) {
    writing.textContent = "It was a tie";
  } else if (computerSelection == "ROCK") {
    if (playerSelection == "PAPER") {
      writing.textContent = "You win! Paper beats Rock";
      playerScore += 1;
    } else {
      writing.textContent = "You lost! Rock beats Scissors";
    }
  } else if (computerSelection == "PAPER") {
    if (playerSelection == "ROCK") {
      writing.textContent = "You lost. Paper beats Rock";
    } else {
      writing.textContent = "You win! Scissors beats Paper";
      playerScore += 1;
    }
  } else if (computerSelection == "SCISSORS") {
    if (playerSelection == "PAPER") {
      writing.textContent = "You lost. Scissors beat Paper";
    } else {
      writing.textContent = "You win! Rock beats Scissors";
      playerScore += 1;
    }
  }
  writeResults.appendChild(writing);
  return playerScore;
};

const displayResult = (result) => {
  const resultElement = document.createElement('h1');
  resultElement.textContent = result;
  document.body.appendChild(resultElement);
};

const game = () => {
  let playerScore = 0;
  let roundsPlayed = 0;
  const btns = document.querySelectorAll("button");

  buttonClickHandler = 
  btns.forEach((button) => {
    button.addEventListener("click", () => {
      const playerSelection = button.textContent.toUpperCase();
      playerScore = playRound(
        computerSelection(),
        playerSelection,
        playerScore
    );
      roundsPlayed++;

      if (roundsPlayed === 5) {
        if (playerScore >= 3) {
          displayResult(`You Won with a score of :${playerScore}/5 !!!!`);
        } else {
          displayResult(`You Lost with a score of ${playerScore}/5 =(`);
        }
        setTimeout(() =>{
          location.reload();
        }, 1500);
        
        btns.forEach((button) => button.removeEventListener('click', buttonClickHandler))

      }
    });
  });
};

game();

