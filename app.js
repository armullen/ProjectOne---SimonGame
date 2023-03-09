
//DOM constants
const redBtn = document.querySelector('.red');
const blueBtn = document.querySelector('.blue');
const greenBtn = document.querySelector('.green');
const yellowBtn = document.querySelector('.yellow');
const startBtn = document.querySelector('#startBtn');
const streakCounter = document.querySelector('#longestStreak');
const messageBox = document.querySelector('#messageBox');

const buttonArr = [redBtn, blueBtn, greenBtn, yellowBtn];

//global variables
let gameArr = [];
let playerArr = [];
let playerTurn = false;
let gameStart = false;
let computerTurn = true;
let round = 0;


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


redBtn.addEventListener('click', updatePlayerArr);
greenBtn.addEventListener('click', updatePlayerArr);
yellowBtn.addEventListener('click', updatePlayerArr);
blueBtn.addEventListener('click', updatePlayerArr);


startBtn.addEventListener('click', handleStartClick);


function handleStartClick() {
    randomColorSelector();
    showGameArr();
    gameStart = true;
    computerTurn = true;
    //round = 0;

}

function roundCounter(){
    round++;
    messageBox.innerHTML = `Round: ${round}`;
    console.log(round);
}

function randomColorSelector() {
    computerTurn = true;
    let selectBtn = buttonArr[Math.floor(Math.random() * buttonArr.length)];
    gameArr.push(selectBtn);
    roundCounter();
    console.log(gameArr);
}

async function showGameArr() {
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
function disableButtons(){
    redBtn.disable = true;
    greenBtn.disable = true;
    blueBtn.disable = true;
    yellowBtn.disable = true;
}

function updatePlayerArr(){
    playerArr.push(this);
    console.log(playerArr)
    checkAnswer();
};

    function checkAnswer (){
        if( playerArr.length === round){
        for (let i = 0; i < playerArr.length; i++) {
            if (gameArr[i] === playerArr[i]) {
                console.log('true');
                playerArr.length = 0;
                playerTurn = false;
                disableButtons();
                randomColorSelector();
                showGameArr();
            }else if (gameArr[i] !== playerArr[i]){
                console.log('Game Over!');
                gameStart = false;
                playerArr.length = 0;
                gameArr.length = 0;
                round = 0;
                messageBox.innerHTML = ' ';
                disableButtons();
        }
    }
        }else{
            setTimeout(console.log('waiting for user'), 500);
    }}

console.log(playerArr.length);
console.log(round);

//round counter - wait until array matches number of round
//create a function to count longest streak of colors gotten correct by user



