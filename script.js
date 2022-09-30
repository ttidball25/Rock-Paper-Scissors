const choice = ["rock", "paper", "scissors"];

const computerChoices = choice[Math.floor(Math.random()*choice.length)];
const playerChoices = prompt("rock, paper, or scissors?: ");

function playRound(computerChoice, playerChoice) {
    if ((computerChoice == "rock" && playerChoice == "scissors") || (computerChoice == "scissors" && playerChoice == "paper") || (computerChoice == "paper" && playerChoice == "rock")) {
        return ("computer wins! " + computerChoice + " beats " + playerChoice);
    } else if ((playerChoice == "rock" && computerChoice == "scissors") || (playerChoice == "scissors" && computerChoice == "paper") || (playerChoice == "paper" && computerChoice == "rock")) {
        return ("player wins! "  + playerChoice + " beats " + computerChoice);
    } else if (computerChoice == playerChoice) {
        return "tie!";
    } else {
        return "error";
    }
}
console.log(playRound(computerChoices, playerChoices));
console.log("player chose " + playerChoices);
console.log("computer chose " + computerChoices);

