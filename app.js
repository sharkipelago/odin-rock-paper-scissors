function computerPlay(){
    
    let comChoice = Math.floor(Math.random() * 3);
    let result = "Rock";

    if (comChoice === 1)
        result = "Paper";
    else if (comChoice === 2)
        result = "Scissors";

    return result;
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

    console.log(`Computer chose ${computerSelection}`);
    
    let playerWon = null;

    if (playerSelection === computerSelection){
        console.log("It's a draw");
        return playerWon;
    }
    else if (playerSelection === "Rock"){
        if (computerSelection === "Paper")
            playerWon = false;
        else
            playerWon = true;
    } 
    else if (playerSelection === "Paper"){
        if (computerSelection === "Scissors")
            playerWon = false;
        else
            playerWon = true;
    }
    else {
        if (computerSelection === "Rock")
            playerWon = false;
        else
            playerWon = true;
    }

    let first = (playerWon)? playerSelection : computerSelection;
    let second = (playerWon)? computerSelection: playerSelection;
    console.log(`You ${(playerWon)?"Won":"Lose"}! ${first} beats ${second}`);
    return playerWon;
}

function game(){
    let playerWins = 0;
    let comWins = 0;
    let draws = 0;


    for (let i = 0; i < 5; i++) {
        let input = prompt("Chose rock, paper or scissors");
        let result = playRound(input, computerPlay());
        if (result === null)
            draws++;
        else
            (result)? playerWins++: comWins++;

        console.log(`The score is ${playerWins} - ${comWins} - ${draws}`);
        
        if (playerWins > 2 || comWins > 2){
            break;
        } 
    }

    if (playerWins > comWins)
        console.log("===You Win!===");
    else if (comWins > playerWins){
        console.log("===Computer Wins!===")
    }
    else {
        console.log("===It's a draw!===");
    }

}