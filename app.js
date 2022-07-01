function computerPlay(){
    
    let comChoice = Math.floor(Math.random() * 3);
    let result = "Rock";

    if (comChoice === 1)
        result = "Paper";
    else if (comChoice === 2)
        result = "Scissors";

    return result;
}