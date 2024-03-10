let homeScore = 0;
let guestScore = 0;

function updateScore(team) {
    const element = document.getElementById(`${team}-score`);
    element.textContent = team === 'home' ? homeScore.toString().padStart(2, '0') : guestScore.toString().padStart(2, '0');
}

function incrementScore(team, value) {
    if (team === 'home') {
        homeScore += value;
    } else {
        guestScore += value;
    }
    updateScore(team);
}

function decrementScore(team, value) {
    if (team === 'home') {
        homeScore -= value;
        if (homeScore < 0) homeScore = 0;
    } else {
        guestScore -= value;
        if (guestScore < 0) guestScore = 0;
    }
    updateScore(team);
}

function resetScores() {
    homeScore = 0;
    guestScore = 0;
    updateScore('home');
    updateScore('guest');
}