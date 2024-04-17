function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

const computerSelection = getComputerChoice();
let playerInput = prompt("Please enter you selection!", "rock, paper or scissors?");
console.log(computerSelection);
const playerSelection = playerInput.toLowerCase();

function playRound(playerSelection, computerSelection){
    let result;
    if (playerSelection === computerSelection){
        result = "It/'s a draw!"; }
    else { 
        if (computerSelection === "rock") {
            if (playerSelection === "paper"){
                result = "You win! Paper beats rock."; 
            }
            else {
                result = "You lose!Rock beats scissors";
            }
        }
        else {
            if (computerSelection === "scissors") {
                if (playerSelection === "rock"){
                    result = "You win! Rock beats scissors."; 
                }
                else {
                    result = "You lose! Scissors beat paper.";
                }
            }
            else {
                if (computerSelection === "paper"){
                    if (playerSelection === "scissors"){
                        result = "You win! Scissors beats paper."; 
                    }
                    else {
                        result = "You lose! Paper beats rock.";
                    } 
                    }
                }
            }
        }
    console.log(result);
    return result;
    
    }

    playRound(playerSelection, computerSelection);
