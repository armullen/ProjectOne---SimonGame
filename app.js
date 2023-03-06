
//grab all the elements of my game that I will be working with.

const redBtn = document.querySelector('.red');
const blueBtn = document.querySelector('.blue');
const greenBtn = document.querySelector('.green');
const yellowBtn = document.querySelector('.yellow');
const startBtn = document.querySelector('#start');
let streakCounter = document.querySelector('#longestStreak');


//console.log(colorArr); expect array to print
//function that changes the color of the boxes to white for a second when the box is clicked by the user or called on by the computer

function colorSignalRed() {
    redBtn.classList.add('flash')
    setTimeout(() => { redBtn.classList.remove('flash') }, (250));
}
function colorSignalGreen() {
    greenBtn.classList.add('flash')
    setTimeout(() => { greenBtn.classList.remove('flash') }, (250));
}
function colorSignalYellow() {
    yellowBtn.classList.add('flash')
    setTimeout(() => { yellowBtn.classList.remove('flash') }, (250));
}
function colorSignalBlue() {
    blueBtn.classList.add('flash')
    setTimeout(() => { blueBtn.classList.remove('flash') }, (250));
};
redBtn.addEventListener('click', colorSignalRed);
greenBtn.addEventListener('click', colorSignalGreen);
yellowBtn.addEventListener('click', colorSignalYellow);
blueBtn.addEventListener('click', colorSignalBlue);


//function to randomly select colors and blink to show user sequence

const buttonArr = [redBtn, blueBtn, greenBtn, yellowBtn];


function gameSequence() {
    let gameArr = buttonArr[Math.floor(Math.random() * buttonArr.length)];
    if (gameArr === redBtn) {
        colorSignalRed();
    } else if (gameArr === blueBtn) {
        colorSignalBlue();
    } else if (gameArr === yellowBtn) {
        colorSignalYellow();
    } else if (gameArr === greenBtn) {
        colorSignalGreen();
    }
    
}
setTimeout(() => {gameSequence()}, (500));
//console.log(gameSequence()); //expect random colored buttons to flash one at a time when they are called.

console.log(gameSequence())
console.log(gameSequence())
console.log(gameSequence())
console.log(gameSequence())

//push each random button into an empty array one at a time waiting in between each for the user to click on the correct button

//compare the users clicks to the growing array with a while loop?

//use promise to either move on and add new button sequence up to twenty moves when the correct sequence is clicked, or reject when they push a wrong button

//empty the array and start over when the start button is clicked at the end or beginning of the game

//create a function to count longest streak of colors gotten correct by user



