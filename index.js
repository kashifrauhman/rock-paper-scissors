function getComputerChoice(){
    let computerRandomiser = Math.round(Math.random() * 2);
    let computerChoice;

    if(computerRandomiser === 0){
        computerChoice = "Rock";
    }
    else if(computerRandomiser === 1){
        computerChoice = "Paper";
    }
    else{
        computerChoice = "Scissors";
    }
    console.log(computerChoice);
    return computerChoice;
}

function getHumanChoice(){
    let humanChoice = prompt("Whats your choice?");
    humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();
    return humanChoice;
}
let computerScore = 0;
let humanScore = 0;

function playRound(computerChoice, humanChoice){
    if(computerChoice===humanChoice){
        console.log("It's a draw!");
    }
    else if(computerChoice==="Rock" && humanChoice === "Scissors"){
        console.log("Computer Wins!");
        computerScore = computerScore++;
    }
    else if(computerChoice==="Paper" && humanChoice === "Rock"){
        console.log("Computer Wins!");
        computerScore = computerScore++;
    }
    else if(computerChoice === "Scissors" && humanChoice === "Paper"){
        console.log("Computer Wins!");
        computerScore = computerScore++;
    }
    else{
        console.log("Human wins!");
        humanscore = humanScore++;
    }
}

console.log(playRound(getComputerChoice(), getHumanChoice()));
console.log(`Computer Score: ${computerScore}`);
console.log(`Human Score: ${humanScore}`);