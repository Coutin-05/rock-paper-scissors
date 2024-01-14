function getComputerChoice() { //generate a random number up to 3 and assign it to one of the options, rock, paper or scissors
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
game()

