
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


function colorSignalRed() {
    redBtn.classList.add('flash')
    return new Promise(resolve => {
        setTimeout(() => { 
            redBtn.classList.remove('flash');
            setTimeout(() => {
                resolve();
            },250);
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
            },250);
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
            },250);
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
            },250);
        }, 250);
    })
};


redBtn.addEventListener('click', colorSignalRed );
greenBtn.addEventListener('click', colorSignalGreen );
yellowBtn.addEventListener('click', colorSignalYellow );
blueBtn.addEventListener('click', colorSignalBlue );


redBtn.addEventListener('click', updatePlayerArr );
greenBtn.addEventListener('click', updatePlayerArr );
yellowBtn.addEventListener('click', updatePlayerArr );
blueBtn.addEventListener('click', updatePlayerArr );


startBtn.addEventListener('click', handleStartClick);


function handleStartClick(){
    randomColorSelector();
    showGameArr();
    gameStart = true;
}
function randomColorSelector() {
    let selectBtn = buttonArr[Math.floor(Math.random() * buttonArr.length)];
    gameArr.push(selectBtn);
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


function updatePlayerArr(){
        playerArr.push(this);
        console.log(playerArr)
    };

while (gameStart) {
    for(let i = 0; i < gameArr.length; i ++){
    for(let j = 0; j < playerArr.length; j++){
        if(gameArr[i] === playerArr[j]){
            console.log(true);
            playerArr = [];
            playerTurn = false;
            randomColorSelector();
        }else{
            console.log('Game Over!');
            gameStart = false;
            playerArr = [];
        }
    }
    }
}


//create a function to count longest streak of colors gotten correct by user



