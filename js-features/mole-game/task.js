let wins = 0;
let losses = 0;
const winLimit = 10;
const lossLimit = 5;

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

function updateStatus() {
    const deadElement = document.getElementById('dead');
    const lostElement = document.getElementById('lost');

    if (deadElement && lostElement) {
        deadElement.textContent = wins;
        lostElement.textContent = losses;
    }
}

function resetGame() {
    wins = 0;
    losses = 0;
    updateStatus();
}

function showResult(message) {
    const resultModal = document.getElementById('resultModal');
    const resultMessage = document.getElementById('resultMessage');

    resultMessage.textContent = message;
    resultModal.style.display = 'block';
}

function checkGameStatus() {
    if (wins >= winLimit) {
        showResult('Победа!');
        resetGame();
    } else if (losses >= lossLimit) {
        showResult('Вы проиграли!');
        resetGame();
    }
}

document.getElementById('closeButton').addEventListener('click', function() {
    document.getElementById('resultModal').style.display = 'none';
});

for (let i = 1; i <= 9; i++) {
    const hole = getHole(i);
    hole.addEventListener('click', function() {
        if (hole.classList.contains('hole_has-mole')) {
            wins++;
        } else {
            losses++;
        }

        updateStatus();
        checkGameStatus();
    });
}
