let homeScore = 0;
let guestScore = 0;

function updateScore(team) {
    const element = document.getElementById(`${team}-score`);
    element.textContent = team === 'home' ? homeScore.toString().padStart(2, '0') : guestScore.toString().padStart(2, '0');
}