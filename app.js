
//first I want to grab all the elements of my game that I will be working with.

const redBtn = document.querySelector('.red');
const blueBtn = document.querySelector('.blue');
const greenBtn = document.querySelector('.green');
const yellowBtn = document.querySelector('.yellow');
const startBtn = document.querySelector('#start');
let streakCounter = document.querySelector('#longestStreak');
let gameStart = true;
//Now I want to create an array of colors to iterate through to create patterns for the computer to flash.

const colorArr = [redBtn, blueBtn, greenBtn, yellowBtn];

//console.log(colorArr); expect array to print
//I want a function that changes the color of the boxes to white for a second when the box is selected


function colorSignal(){
    redBtn.classList.add('flash')
    setTimeout(() => { redBtn.classList.remove('flash')}, (500))
};
redBtn.addEventListener('click', colorSignal);



