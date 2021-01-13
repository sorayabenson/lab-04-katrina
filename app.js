// import functions and grab DOM elements
import { compChoice } from './getCompThrow.js';

const throwBtn = document.getElementById('playButton');
const choices = document.getElementById('choices');
const winLoseOrDraw = document.getElementById('winLoseOrDraw');
const wins = document.getElementById('wins');
const losses = document.getElementById('losses');
const draws = document.getElementById('draws');


// initialize state
let numOfTries = 0;
let currentWins = 0;
let currentLosses = 0;
let currentDraws = 0;

// set event listeners to update state and DOM
throwBtn.addEventListener('click', () => {
    numOfTries++;
    const userChoice = document.querySelector('input[type=radio]:checked');
    let computerThrow = compChoice();

    console.log(computerThrow);
});