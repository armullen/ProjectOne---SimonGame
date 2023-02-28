
//first I want to grab all the elements of my game that I will be working with.

const redBtn = document.querySelector('#red');
const blueBtn = document.querySelector('#blue');
const greenBtn = document.querySelector('#green');
const yellowBtn = document.querySelector('#yellow');
const startBtn = document.querySelector('#start');
const gameBtn = document.querySelector('.gameBtn');
let streakCounter = document.querySelector('#longestStreak');
let gameStart = true;
//Now I want to create an array of colors to iterate through to create patterns for the computer to flash.

const colorArr = [redBtn, blueBtn, greenBtn, yellowBtn];

//console.log(colorArr); expect array to print
//I want a function that changes the color of the boxes to white for a second when the box is selected

function colorSignal(){
    gameBtn.classList.add('selectedBtn');
}
gameBtn.addEventListener('click', colorSignal())

// setInterval(gameBtn, 1000);
// gameBtn.onClick = colorSignal();

//I want a while loop to iterate through and randomly return a string of colored buttons
