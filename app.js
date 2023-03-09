
//DOM constants
const redBtn = document.querySelector('.red');
const blueBtn = document.querySelector('.blue');
const greenBtn = document.querySelector('.green');
const yellowBtn = document.querySelector('.yellow');
const startBtn = document.querySelector('#startBtn');
const messageBox = document.querySelector('#messageBox');

const buttonArr = [redBtn, blueBtn, greenBtn, yellowBtn];

//global variables
let gameArr = [];
let playerArr = [];
let gameStart = false;
let computerTurn = true;
let round = 0;
redBtn.disabled = true;
greenBtn.disabled = true;
blueBtn.disabled = true;
yellowBtn.disabled = true;

messageBox.innerHTML = 'Press start to play!'


function colorSignalRed() {
    redBtn.classList.add('flash')
    return new Promise(resolve => {
        setTimeout(() => {
            redBtn.classList.remove('flash');
            setTimeout(() => {
                resolve();
            }, 250);
        }, 250);
    })
}
function colorSignalGreen() {
    greenBtn.classList.add('flash')
    return new Promise(resolve => {
        setTimeout(() => {
            greenBtn.classList.remove('flash');
            setTimeout(() => {
                resolve();
            }, 250);
        }, 250);
    })
}
function colorSignalYellow() {
    yellowBtn.classList.add('flash')
    return new Promise(resolve => {
        setTimeout(() => {
            yellowBtn.classList.remove('flash');
            setTimeout(() => {
                resolve();
            }, 250);
        }, 250);
    })
}
function colorSignalBlue() {
    blueBtn.classList.add('flash')
    return new Promise(resolve => {
        setTimeout(() => {
            blueBtn.classList.remove('flash');
            setTimeout(() => {
                resolve();
            }, 250);
        }, 250);
    })
};


redBtn.addEventListener('click', colorSignalRed);
greenBtn.addEventListener('click', colorSignalGreen);
yellowBtn.addEventListener('click', colorSignalYellow);
blueBtn.addEventListener('click', colorSignalBlue);


redBtn.addEventListener('click', playerTurn);
greenBtn.addEventListener('click', playerTurn);
yellowBtn.addEventListener('click', playerTurn);
blueBtn.addEventListener('click', playerTurn);


startBtn.addEventListener('click', handleStartRound);


function handleStartRound() {
    randomColorSelector();
    showGameArr();
    gameStart = true;
    computerTurn = true;
    enableButtons();
}

function roundCounter() {
    if (round === 10) {
        gameOver();
    } else {
        round++;
        messageBox.innerHTML = `Round: ${round}`;
        console.log('Round', round);
    }
}

function randomColorSelector() {
    let selectBtn = buttonArr[Math.floor(Math.random() * buttonArr.length)];
    gameArr.push(selectBtn);
    roundCounter();
    console.log('Simons Array: ', gameArr);
}

async function showGameArr() {
    await new Promise(resolve => {
        setTimeout(() => resolve(), 1000);
    })
    for (let i = 0; i < gameArr.length; i++) {
        if (gameArr[i] === redBtn) {
            await colorSignalRed();
        } else if (gameArr[i] === blueBtn) {
            await colorSignalBlue();
        } else if (gameArr[i] === yellowBtn) {
            await colorSignalYellow();
        } else if (gameArr[i] === greenBtn) {
            await colorSignalGreen();
        }
    }
}

function disableButtons() {
    if (!gameStart) {
        redBtn.disabled = true;
        greenBtn.disabled = true;
        blueBtn.disabled = true;
        yellowBtn.disabled = true;
    }
}

function enableButtons() {
    if (gameStart) {
        redBtn.disabled = false;
        greenBtn.disabled = false;
        blueBtn.disabled = false;
        yellowBtn.disabled = false;
    }
}

function playerTurn() {
    playerArr.push(this);
    console.log('Player Array = ', playerArr);
    checkAnswer();
}


function gameOver() {
    if (round === 10) {
        console.log('You Win! You beat Simon!')
        messageBox.innerHTML = 'You beat Simon! Good job! Push start to try again.';
    } else {
        console.log('Game Over!')
        messageBox.innerHTML = 'Game Over! Push start to try again.';
    }
    round = 0;
    gameArr = [];
    playerArr = [];
    gameStart = false;
    disableButtons();
}


function checkAnswer() {
    if (playerArr.length === round) {
        for (let i = 0; i < playerArr.length; i++) {
            if (gameArr[i] === playerArr[i]) {
                console.log('Matched');
            } else {
                if (gameArr[i] !== playerArr[i]) {
                    gameOver();
                }
            }
        }
        handleStartRound();
        playerArr = [];
    }
}








