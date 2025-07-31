/* 
Prompt: 
Start by setting up all variables:
- choices array with rock, paper, scissors
- player and computer scores
- round number
- also get all DOM elements like score spans, choice buttons, message areas
*/
const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let round = 1;

const playerScoreSpan = document.getElementById("player-score");
const computerScoreSpan = document.getElementById("computer-score");
const roundNumber = document.getElementById("round-number");
const resultMessage = document.getElementById("result-message");
const playerChoiceDisplay = document.getElementById("player-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");


/* 
Prompt:
When any of the choice buttons (rock, paper, scissors) is clicked:
- stop if round > 5
- get player’s choice from the button ID
- randomly generate computer’s choice
- show both emojis
- check result using a helper function
- update message and scores
- update round number
- if it's the last round (after 5), show final winner
*/

document.querySelectorAll(".choice-button").forEach(button => {
  button.addEventListener("click", () => {
    if (round > 5) return;

    const playerChoice = button.id;
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    playerChoiceDisplay.textContent = symbol(playerChoice);
    computerChoiceDisplay.textContent = symbol(computerChoice);

    const result = getResult(playerChoice, computerChoice);
    if (result === "win") {
      playerScore++;
      resultMessage.textContent = "You win this round!";
      resultMessage.style.color = "#2ecc71";
    } else if (result === "lose") {
      computerScore++;
      resultMessage.textContent = "Computer wins this round!";
      resultMessage.style.color = "#e74c3c";
    } else {
      resultMessage.textContent = "It's a tie!";
      resultMessage.style.color = "#bdc3c7";
    }

    updateScores();
    round++;
    roundNumber.textContent = round <= 5 ? round : 5;

    if (round > 5) {
      showFinalWinner();
    }
  });
});


/* 
Prompt:
When reset button is clicked:
- reset player & computer score to 0
- set round back to 1
- reset all UI text and emojis to default
*/


document.getElementById("reset-button").addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  round = 1;
  updateScores();
  roundNumber.textContent = "1";
  resultMessage.textContent = "Make your choice!";
  resultMessage.style.color = "#ffffff";
  playerChoiceDisplay.textContent = "?";
  computerChoiceDisplay.textContent = "?";
});

/* 
Prompt:
Write updateScores() function:
- just set the score spans to current score values
*/


function updateScores() {
  playerScoreSpan.textContent = playerScore;
  computerScoreSpan.textContent = computerScore;
}


/* 
Prompt:
Write getResult(player, computer):
- return 'win', 'lose', or 'tie' based on combinations
- use normal if checks like rock beats scissors etc
*/


function getResult(player, computer) {
  if (player === computer) return "tie";
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) return "win";
  return "lose";
}


/* 
Prompt:
Write showFinalWinner():
- compare scores after 5 rounds
- set final result message and color:
  green if player wins, red if computer wins, grey if tie
*/


function showFinalWinner() {
  if (playerScore > computerScore) {
    resultMessage.textContent = "🎉 You won the game!";
    resultMessage.style.color = "#2ecc71";
  } else if (computerScore > playerScore) {
    resultMessage.textContent = "💻 Computer wins the game!";
    resultMessage.style.color = "#e74c3c";
  } else {
    resultMessage.textContent = "🤝 It’s a tie!";
    resultMessage.style.color = "#bdc3c7";
  }
}


/* 
Prompt:
Write symbol(choice):
- return 🪨 for rock, 📄 for paper, ✂️ for scissors
- use ternary conditions
*/


function symbol(choice) {
  return choice === "rock" ? "🪨" : choice === "paper" ? "📄" : "✂️";
}
