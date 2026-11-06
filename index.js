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
    
    return computerChoice;
}

function getHumanChoice(){
    let humanChoice = prompt("Whats your choice?");
    humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase;
    return humanChoice;
}

console.log(getHumanChoice());