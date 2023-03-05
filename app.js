
//grab all the elements of my game that I will be working with.

const redBtn = document.querySelector('.red');
const blueBtn = document.querySelector('.blue');
const greenBtn = document.querySelector('.green');
const yellowBtn = document.querySelector('.yellow');
const startBtn = document.querySelector('#start');
let streakCounter = document.querySelector('#longestStreak');
let gameStart = true;


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
    for (let i = 0; i < buttonArr.length; i++) {
        if (buttonArr[i] === redBtn) {
                colorSignalRed();
            }
            if (buttonArr[i] === blueBtn){
                    colorSignalBlue();
                }
            }
            return buttonArr[Math.floor(Math.random() * buttonArr.length)]
}
console.log(gameSequence()); //expect random colored buttons to flash one at a time when they are called.

//push each random button into an empty array

//compare the users clicks to the growing array with a while loop?

//use promise to either move on and add new buttons up to twenty moves when the correct sequence is clicked, or reject when they push a wrong button

//empty array and start over when the start button is clicked at the end or beginning of the game



