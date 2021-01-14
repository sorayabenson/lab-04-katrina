// import functions and grab DOM elements
import { compChoice } from './getCompThrow.js';
import { didUserWin } from './didUserWin.js';

const throwBtn = document.getElementById('playButton');
const choices = document.getElementById('choices');
const winLoseOrDraw = document.getElementById('winLoseOrDraw');
const wins = document.getElementById('wins');
const losses = document.getElementById('losses');
const draws = document.getElementById('draws');
const tries = document.getElementById('tries');


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
    let userWin = didUserWin(userChoice.value, computerThrow);

    choices.textContent = `You chose ${userChoice.value}, and the computer chose ${computerThrow}!`;

    if (userWin === 'draw') {
        winLoseOrDraw.textContent = `That's a draw!`;
        currentDraws++;
        draws.textContent = `Draws: ${currentDraws}`;
    }
    else if (userWin === 'userWin') {
        winLoseOrDraw.textContent = `NICE!! You won!`;
        currentWins++;
        wins.textContent = `Wins: ${currentWins}`;
    }
    else {
        winLoseOrDraw.textContent = `Sorry, you lost. Try again!`;
        currentLosses++;
        losses.textContent = `Wins: ${currentLosses}`;
    }
    tries.textContent = `Out of ${numOfTries} tries!`;

}); 