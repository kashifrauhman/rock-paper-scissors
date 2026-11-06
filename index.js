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

console.log(getComputerChoice);