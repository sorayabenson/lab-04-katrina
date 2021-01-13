// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { compChoice } from '../getCompThrow.js';
import { didUserWin } from '../didUserWin.js';

const test = QUnit.test;

test('should return a string', (expect) => {
    const expected = 'string';
    const actual = typeof compChoice();
    expect.equal(actual, expected);
});

test('should return a user win when given user paper and comp rock', (expect) => {
    const expected = 'userWin';
    const actual = didUserWin('paper', 'rock');
    expect.equal(actual, expected);
});

test('should return a user loose when given user rock and comp paper', (expect) => {
    const expected = 'userLose';
    const actual = didUserWin('rock', 'paper');
    expect.equal(actual, expected);
});

test('should return a draw when given user rock and comp rock', (expect) => {
    const expected = 'draw';
    const actual = didUserWin('rock', 'rock');
    expect.equal(actual, expected);
});
