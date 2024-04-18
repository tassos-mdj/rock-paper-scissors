function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

let computerScore = 0;
let playerScore = 0;

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

function playGame(){
    let initGame = confirm("Do you want to start a new game?");
    if (initGame) {
        const computerSelection = getComputerChoice();
        let playerInput = prompt("Please enter you selection!", "rock, paper or scissors?");
        console.log(`Computer chose ${computerSelection}`);
        const playerSelection = playerInput.toLowerCase();
        console.log(playRound(playerSelection, computerSelection));
        console.log(`The score is player: ${playerScore} , computer: ${computerScore}`);
        playGame();
        }
    else {console.log(`The game has ended. The final score is player: ${playerScore} , computer: ${computerScore}`)}
    }

playGame();