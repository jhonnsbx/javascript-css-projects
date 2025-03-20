/// rock paper scissors

const choices = ["rock","paper","scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    console.log(computerChoice);

    if (playerChoice === computerChoice){
        result = "its a tie"
    }else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissors") ? "you win" : "you lose";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "you win" : "you lose";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "you win" : "you lose";
                break;
        }
    }
    
    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;
    resultDisplay.classList.remove("greenText","redText");

    switch(result){
        case "you win":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "you lose":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }
}