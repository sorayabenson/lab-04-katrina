// import functions and grab DOM elements
import { compChoice } from './getCompThrow.js';
import { didUserWin } from './didUserWin.js';

const throwBtn = document.getElementById('playButton');
const compAndUserChoices = document.getElementById('comp-and-user-choices');
const winLoseOrDraw = document.getElementById('winLoseOrDraw');
const wins = document.getElementById('wins');
const losses = document.getElementById('losses');
const draws = document.getElementById('draws');
const tries = document.getElementById('tries');
const resetBtn = document.getElementById('resetButton');


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
    let gameOutcome = didUserWin(userChoice.value, computerThrow);

    compAndUserChoices.textContent = `You chose ${userChoice.value}, and the computer chose ${computerThrow}!`;

    if (gameOutcome === 'draw') {
        winLoseOrDraw.textContent = `That's a draw!`;
        currentDraws++;
        draws.textContent = `Draws: ${currentDraws}`;
    }
    else if (gameOutcome === 'userWin') {
        winLoseOrDraw.textContent = `NICE!! You won!`;
        currentWins++;
        wins.textContent = `Wins: ${currentWins}`;
    }
    else {
        winLoseOrDraw.textContent = `Sorry, you lost. Try again!`;
        currentLosses++;
        losses.textContent = `Losses: ${currentLosses}`;
    }

    tries.textContent = `Out of ${numOfTries} tries!`;

    //show reset button
    resetBtn.style.display = "block";

});

resetBtn.addEventListener('click', () => {

    //reset all of the state elements
    numOfTries = 0;
    currentWins = 0;
    currentLosses = 0;
    currentDraws = 0;

    tries.textContent = `Out of ${numOfTries} tries!`;
    draws.textContent = `Draws: ${currentDraws}`;
    wins.textContent = `Wins: ${currentWins}`;
    losses.textContent = `Losses: ${currentLosses}`;

    //rehide compAndUserChoices and winLoseOrDraw
    compAndUserChoices.style.display = 'none';

    winLoseOrDraw.style.display = 'none';

})