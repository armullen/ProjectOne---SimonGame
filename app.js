
//first I want to grab all the elements of my game that I will be working with.

const redBtn = document.querySelector('#red');
const blueBtn = document.querySelector('#blue');
const greenBtn = document.querySelector('#green');
const yellowBtn = document.querySelector('#yellow');
const startBtn = document.querySelector('#start');
let streakCounter = document.querySelector('#longestStreak');

//Now I want to create an array of colors to iterate through to create patterns for the computer to flash.

const colorArr = [redBtn, blueBtn, greenBtn, yellowBtn];

console.log(colorArr);