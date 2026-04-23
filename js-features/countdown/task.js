let timerValue = parseInt(document.getElementById('timer').textContent);

function updateTimer() {
    timerValue--;
    document.getElementById('timer').textContent = timerValue;

    if (timerValue <= 0) {
        clearInterval(timerInterval);
        alert('Вы победили в конкурсе!');
        document.getElementById('winnerModal').style.display = 'block';
    }
}

const timerInterval = setInterval(updateTimer, 1000);

function closeModal() {
    document.getElementById('winnerModal').style.display = 'none';
}
