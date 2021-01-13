// import functions and grab DOM elements
const throwBtn = document.getElementById('playButton');

// initialize state

// set event listeners to update state and DOM
throwBtn.addEventListener('click', () => {
    const userChoice = document.querySelector('input[type=radio]:checked');
    console.log(userChoice.value);
});