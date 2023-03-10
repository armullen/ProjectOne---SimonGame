
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
let round = 1;
redBtn.disabled = true;
greenBtn.disabled = true;
blueBtn.disabled = true;
yellowBtn.disabled = true;

messageBox.innerHTML = 'Press start to play!'


redBtn.addEventListener('click', colorSignalRed);
greenBtn.addEventListener('click', colorSignalGreen);
yellowBtn.addEventListener('click', colorSignalYellow);
blueBtn.addEventListener('click', colorSignalBlue);


redBtn.addEventListener('click', playerTurn);
greenBtn.addEventListener('click', playerTurn);
yellowBtn.addEventListener('click', playerTurn);
blueBtn.addEventListener('click', playerTurn);


startBtn.addEventListener('click', handleStartRound);

function disableButtons() {
        redBtn.disabled = true;
        greenBtn.disabled = true;
        blueBtn.disabled = true;
        yellowBtn.disabled = true;
}

function enableButtons() {
        redBtn.disabled = false;
        greenBtn.disabled = false;
        blueBtn.disabled = false;
        yellowBtn.disabled = false;
}


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

function handleStartRound() {
    messageBox.innerHTML = `Round: ${round}`;
    randomColorSelector();
    showGameArr();
    enableButtons();
}

function roundCounter() {
    if (round === 10) {
        beatSimon();
    } else {
        round++;
        messageBox.innerHTML = `Round: ${round}`;
        console.log('Round', round);
        handleStartRound();  
    }
}

function randomColorSelector() {
    let selectBtn = buttonArr[Math.floor(Math.random() * buttonArr.length)];
    gameArr.push(selectBtn);
    console.log('Simons Array: ', gameArr);
}


function playerTurn() {
    playerArr.push(this);
    console.log('Player Array = ', playerArr);
    if (playerArr.length === round) {
    checkAnswer();
    }
}

function checkAnswer() {
    for (let i = 0; i < playerArr.length; i++) {
        if (gameArr[i] === playerArr[i]) {
            console.log('Matched');
        } else {
            gameOver();
            return
        }
    }
    playerArr = [];
    roundCounter();
}
    
    
    function gameOver() {
        console.log('Game Over!');
        messageBox.innerHTML = 'Game Over! Push start to try again.';
        round = 1;
        gameArr = [];
        playerArr = [];
        disableButtons();
    }
    
    function beatSimon() {
        console.log('You Win! You beat Simon!');
        messageBox.innerHTML = 'You beat Simon! Good job! Push start to try again.';
        round = 1;
        gameArr = [];
        playerArr = [];
        disableButtons();
    }
