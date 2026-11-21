/*function getComputerChoice() { //generate a random number up to 3 and assign it to one of the options, rock, paper or scissors
    let randomNumber = Math.floor(Math.random()*3) +1;
    if (randomNumber === 1) {
        return "paper";
    } else if (randomNumber === 2) {
        return "rock";
    } else {
        return "scissors";
    }
}

function playRound (playerSelection, computerSelection) { //determine the winner and return message if player win or lose
    if (playerSelection == computerSelection) {
        return "It's a tie!";
    } else if ( //player win
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
    ) {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    } else { //player lose
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }

}

function getPlayerChoice() { //get the player input and converts to lowercase
    let choice = prompt("Rock Paper Scissors");
    let choiceLowerCase = choice.toLowerCase();
    return choiceLowerCase;
}

function game() { //run the playRound function 5 times and log it's result
    for (let i = 0; i < 5; i++) {
        let playerSelection = getPlayerChoice ();
        let computerSelection = getComputerChoice ();
        console.log(playRound(playerSelection,computerSelection));
    }
}
game()*/

let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_span = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
  //generate a random number up to 3 and assign it to one of the options, rock, paper or scissors
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.textContent = String(userScore).padStart(2, "0");
  computerScore_span.textContent = String(computerScore).padStart(2, "0");
  const smallUserWord = '<sup class="choice-label">user</sup>';
  const smallCompWord = '<sup class="choice-label">comp</sup>';
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord} ! You win!! 🏆`;
  userChoice_div.classList.add("green-glow");
  setTimeout(() => userChoice_div.classList.remove("green-glow"), 300);
}

function lose(userChoice, computerChoice) {
  computerScore++;
  userScore_span.textContent = String(userScore).padStart(2, "0");
  computerScore_span.textContent = String(computerScore).padStart(2, "0");
  const smallUserWord = '<sup class="choice-label">user</sup>';
  const smallCompWord = '<sup class="choice-label">comp</sup>';
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord} ! You lost!! 💩`;
  userChoice_div.classList.add("red-glow");
  setTimeout(() => userChoice_div.classList.remove("red-glow"), 300);
}

function tie(userChoice, computerChoice) {
  const smallUserWord = '<sup class="choice-label">user</sup>';
  const smallCompWord = '<sup class="choice-label">comp</sup>';
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord} ! It's a tie!! 😑`;
  userChoice_div.classList.add("grey-glow");
  setTimeout(() => userChoice_div.classList.remove("grey-glow"), 300);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      tie(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", () => game("r"));

  paper_div.addEventListener("click", () => game("p"));

  scissors_div.addEventListener("click", () => game("s"));
}

main();
