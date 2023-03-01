
//first I want to grab all the elements of my game that I will be working with.

const redBtn = document.querySelector('.red');
const blueBtn = document.querySelector('.blue');
const greenBtn = document.querySelector('.green');
const yellowBtn = document.querySelector('.yellow');
const startBtn = document.querySelector('#start');
let streakCounter = document.querySelector('#longestStreak');
let gameStart = true;


//console.log(colorArr); expect array to print
//I want a function that changes the color of the boxes to white for a second when the box is selected

function colorSignalRed(){
    redBtn.classList.add('flash')
    setTimeout(() => { redBtn.classList.remove('flash')}, (250));
}
function colorSignalGreen(){
    greenBtn.classList.add('flash')
    setTimeout(() => { greenBtn.classList.remove('flash')}, (250));
}
function colorSignalYellow(){
    yellowBtn.classList.add('flash')
    setTimeout(() => { yellowBtn.classList.remove('flash')}, (250));
}
function colorSignalBlue(){
    blueBtn.classList.add('flash')
    setTimeout(() => { blueBtn.classList.remove('flash')}, (250));
};
redBtn.addEventListener('click', colorSignalRed);
greenBtn.addEventListener('click', colorSignalGreen);
yellowBtn.addEventListener('click', colorSignalYellow);
blueBtn.addEventListener('click', colorSignalBlue);

//I want to create an array of colors to iterate through to create patterns for the computer to flash.

//I want a function that predicts the array of 20 indicies of color in random order to pre load the game.
const buttonArr = [redBtn, blueBtn, greenBtn, yellowBtn];
let gameArray = buttonArr[Math.floor(Math.random() * buttonArr.length)];  //empty array to push game into.

function gameSequence(){
if(gameArray === '.red'){
    colorSignalRed;
} else{
    if(gameArray === '.blue'){
        colorSignalBlue
    }else{
        if(gameArray === '.green'){
            colorSignalGreen
        }else{
            if(gameArray === '.yellow'){
                colorSignalYellow
            }
        }
    }
}
};
    
console.log(gameArray[i]);