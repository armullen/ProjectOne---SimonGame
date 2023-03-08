
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

function roundCounter(){
    
}
        
           



while (gameStart) {
            playerTurn = true;
        if (playersArr[i] === GameArr[i]) {
                randomColorSelector();
            }else{
            console.log('Game Over!')
             !gameOn
}}
          if(gameStart && !playerTurn){
         randomColorSelector();
         showGameArr();

         console.log(playerTurn);
}
   


//start button, array, user click, compare, second array push or reject

//compare the users clicks to the growing array with a while loop?

//use promise to either move on and add new button sequence up to twenty moves when the correct sequence is clicked, or reject when they push a wrong button

//empty the array and start over when the start button is clicked at the end or beginning of the game

//create a function to count longest streak of colors gotten correct by user



