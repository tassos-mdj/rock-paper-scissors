let computerScore = 0;
let playerScore = 0;
let initGame = true;
const resultsDisplay = document.querySelector("div");
const newP = document.createElement("p");
const newP2 = document.createElement("p");

const buttons = document.querySelectorAll("button");


buttons.forEach((button) => {
    button.addEventListener("click", () => {
        console.log(button.value);
        playGame(button.value);
        })
});


function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

function playRound(playerSelection, computerSelection){
    let result;
    if (playerSelection === computerSelection){
        result = "It/'s a draw!";
    }
    else { 
        if (computerSelection === "rock") {
            if (playerSelection === "paper"){
                result = "You win! Paper beats rock.";
                playerScore += 1; 
            }
            else {
                result = "You lose!Rock beats scissors";
                computerScore += 1;
            }
        }
        else {
            if (computerSelection === "scissors") {
                if (playerSelection === "rock"){
                    result = "You win! Rock beats scissors."; 
                    playerScore += 1;
                }
                else {
                    result = "You lose! Scissors beat paper.";
                    computerScore += 1;
                }
            }
            else {
                if (computerSelection === "paper"){
                    if (playerSelection === "scissors"){
                        result = "You win! Scissors beats paper.";
                        playerScore += 1; 
                    }
                    else {
                        result = "You lose! Paper beats rock.";
                        computerScore += 1;
                    } 
                    }
                }
            }
        }
    
    return result;
    
    }

    

function playGame(playerChoice){
    
    
    if (computerScore == 5 || playerScore == 5) {initGame = false};

    if (initGame) {
        const computerSelection = getComputerChoice();
        let playerSelection = playerChoice;
        resultsDisplay.textContent = `Computer chose ${computerSelection}`;
        resultsDisplay.textContent += `, player chose ${playerSelection}`;
        newP.textContent = `${playRound(playerSelection, computerSelection)}`;
        newP2.textContent = `The score is player: ${playerScore} , computer: ${computerScore}`;
        resultsDisplay.appendChild(newP);
        resultsDisplay.appendChild(newP2);
                    
    }
    else {
        newP2.textContent = `The game has ended. The final score is player: ${playerScore} , computer: ${computerScore}`;
        resultsDisplay.appendChild(newP2);
        
    }
    }




