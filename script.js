let buttons = document.querySelectorAll('.buttons')
const reset = document.querySelector('.reset')
let playerSelection;
let player = 0;
let computer = 0;
i = 0;
let speed = 50;
let premise = 'THE AI IS THREATENING TO TAKE YOUR JOB UNLESS YOU CAN OUTSMART IT IN A GAME OF ROCK, PAPER, SCISSORS DO YOU HAVE WHAT IT TAKES?';

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id
        startGame(playerSelection);
    })
})

function typing() {
    if (i < premise.length) {
        document.getElementById('premise').innerHTML += premise.charAt(i);
        i++;
        setTimeout(typing, speed);
    }
}

function playerChoice() {
    if (playerSelection == 'ROCK') {
        document.getElementById('playerChoice').src = 'rock.png';
    } else if (playerSelection == 'PAPER') {
        document.getElementById('playerChoice').src = 'paper.png';
    } else if (playerSelection == 'SCISSORS') {
        document.getElementById('playerChoice').src = 'scissors.png';
    }
}

function computerChoice(computerSelection) {
    if (computerSelection == 'ROCK') {
        document.getElementById('computerChoice').src = 'rock.png';
    } else if (computerSelection == 'PAPER') {
        document.getElementById('computerChoice').src = 'paper.png';
    } else if (computerSelection == 'SCISSORS') {
        document.getElementById('computerChoice').src = 'scissors.png';
    }
}

function getComputerChoice() {
    const weapon = ["ROCK", "PAPER", "SCISSORS"]
    randomNumber = Math.floor(Math.random() * weapon.length);
    if (randomNumber == 0) {
        return weapon[0];
    } else if (randomNumber == 1) {
        return weapon[1];
    } return weapon[2];
}

function playerScore(){
    document.getElementById('playerScore').innerHTML = player;
}

function computerScore(){
    document.getElementById('computerScore').innerHTML = computer;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        document.getElementById('score-text').innerHTML = `You Tie! ${playerSelection} ties with ${computerSelection}`;
        document.getElementById('playerChoice').style.backgroundColor = 'white';
        document.getElementById('computerChoice').style.backgroundColor = 'white';
    } else if (playerSelection == "ROCK" && computerSelection == "SCISSORS" || 
        playerSelection == "PAPER" && computerSelection == "ROCK" || 
        playerSelection == "SCISSORS" && computerSelection == "PAPER") {
            player++;
            document.getElementById('score-text').innerHTML = `You Win! ${playerSelection} beats ${computerSelection}`;
            document.getElementById('playerChoice').style.backgroundColor = 'green';
            document.getElementById('computerChoice').style.backgroundColor = '#f23722';
    } else {
        computer++;
        document.getElementById('score-text').innerHTML = `You Lose! ${computerSelection} beats ${playerSelection}`;
        document.getElementById('playerChoice').style.backgroundColor = '#f23722';
        document.getElementById('computerChoice').style.backgroundColor = 'green';
    }
}

function disable(player, computer) {
    if (player === 5 || computer === 5) {
        buttons.forEach((button) => {
            button.setAttribute('disabled', '');
        })
    }
}

function engGame(player,computer) {
    if (player === 5) {
        disable(player,computer);
        document.getElementById('score-text').innerHTML = 'YOU WIN! YOU HAVE BEATEN THE AI AND SECURED THE JOB!';
        reset.style.visibility = 'visible';
    } else if (computer === 5) {
        disable(player,computer);
        document.getElementById('score-text').innerHTML = 'YOU LOSE! THE AI HAS TAKEN YOUR JOB!';
        reset.style.visibility = 'visible';
    }
}

function resetGame() {
    reset.addEventListener('click', () => {
        window.location.reload();
    })
}

function startGame(playerSelection) {
    const computerSelection = getComputerChoice();
    playRound(playerSelection,computerSelection);
    playerChoice(playerSelection);
    computerChoice(computerSelection);
    playerScore(player);
    computerScore(computer);
    engGame(player, computer);
    resetGame();
}

typing();
