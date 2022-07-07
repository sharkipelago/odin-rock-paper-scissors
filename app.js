const roundResult = document.querySelector("#round-result");
const computerChoice = document.querySelector("#computer-choice");
const runningScore = document.querySelector("#running-score");
const finalResult = document.querySelector("#final-result");

const buttons = document.querySelectorAll(".choice");
buttons.forEach(btn => btn.addEventListener("click", onChoiceClick));


let playerWins = 0;
let comWins = 0;
let draws = 0;

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

    updateResults(computerChoice, `Computer chose ${computerSelection}`)
    
    let playerWon = null;

    if (playerSelection === computerSelection){
        updateResults(roundResult, "It's a draw")
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
    updateResults(roundResult, `You ${(playerWon)?"Won":"Lose"}! ${first} beats ${second}`)
    return playerWon;
}

function triggerGameOver(){
    finalResult.innerText = (playerWins > comWins) ? "===You Win!===" : "===Computer Wins!===";
}

function updateResults(element, message){
    element.innerText = message;
}

function updateScore(result){

    if (result === null)
        draws++;
    else
        (result)? playerWins++: comWins++;

    runningScore.innerText = `Player: ${playerWins} - Com: ${comWins} - Draws: ${draws}`;
    
    if (playerWins > 4 || comWins > 4){
        triggerGameOver();
    }
}

function onChoiceClick(e){
    result = playRound(e.target.getAttribute("value"),computerPlay())
    updateScore(result)
}