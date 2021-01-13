export function didUserWin(userPick, compPick) {
    if (userPick === compPick) {
        return 'draw';
    }
    else if (userPick === 'rock' && compPick === 'scissors') {
        return 'userWin';
    }
    else if (userPick === 'scissors' && compPick === 'paper') {
        return 'userWin';
    }
    else if (userPick === 'paper' && compPick === 'rock') {
        return 'userWin';
    }
    else return 'userLose';
}
