function updateTime() {
    const now = new Date();
    const hours = now.getHours() % 12 || 12;
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const period = now.getHours() >= 12 ? 'pm' : 'am';

    document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;
    document.getElementById('period').textContent = period;
}

function toggleChronometer() {
    document.getElementById('chrono').classList.toggle('hide');
    document.getElementById('timer').classList.add('hide');
    document.getElementById('timerDisplay').classList.add('hide');
}

function toggleTimer() {
    document.getElementById('timer').classList.toggle('hide');
    document.getElementById('chrono').classList.add('hide');
}

let chronometerInterval;
let chronometerTime = 0;
let chronometerRunning = false;

function startChronometer() {
    if (!chronometerRunning) {
        chronometerInterval = setInterval(updateChronometer, 1000);
        chronometerRunning = true;
    }
}

function stopChronometer() {
    clearInterval(chronometerInterval);
    chronometerRunning = false;
}

function resetChronometer() {
    clearInterval(chronometerInterval);
    chronometerTime = 0;
    chronometerRunning = false;
    document.getElementById('chronoDisplay').textContent = '00:00:00';
}

function updateChronometer() {
    chronometerTime++;
    const hours = Math.floor(chronometerTime / 3600);
    const minutes = Math.floor((chronometerTime % 3600) / 60);
    const seconds = chronometerTime % 60;
    document.getElementById('chronoDisplay').textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

let timerInterval;
let timerRunning = false;

function startTimer() {
    if (!timerRunning) {
        const hours = parseInt(document.getElementById('hours').value) || 0;
        const minutes = parseInt(document.getElementById('minutes').value) || 0;
        const seconds = parseInt(document.getElementById('seconds').value) || 0;
        const totalTime = hours * 3600 + minutes * 60 + seconds;
        if (totalTime <= 0) {
            alert('Por favor, ingrese un tiempo válido.');
            return;
        }

        let remainingTime = totalTime;
        document.getElementById('timerDisplay').classList.remove('hide');
        timerInterval = setInterval(() => {
            remainingTime--;
            if (remainingTime <= 0) {
                clearInterval(timerInterval);
                alert('¡Tiempo terminado!');
            }
            const displayHours = Math.floor(remainingTime / 3600);
            const displayMinutes = Math.floor((remainingTime % 3600) / 60);
            const displaySeconds = remainingTime % 60;
            document.getElementById('timerDisplay').textContent = `${String(displayHours).padStart(2, '0')}:${String(displayMinutes).padStart(2, '0')}:${String(displaySeconds).padStart(2, '0')}`;
        }, 1000);
        timerRunning = true;
    }
}

function stopTimer() {
    clearInterval(timerInterval);
    timerRunning = false;
}

function resetTimer() {
    clearInterval(timerInterval);
    timerRunning = false;
    document.getElementById('timerDisplay').textContent = '00:00:00';
    document.getElementById('hours').value = '';
    document.getElementById('minutes').value = '';
    document.getElementById('seconds').value = '';
}

function selectMode(mode) {
    const modes = document.querySelectorAll('.mode');
    modes.forEach(m => m.classList.add('hide'));
    document.getElementById(mode).classList.remove('hide');
    document.getElementById('title').textContent = mode === 'chrono' ? 'Cronómetro' : 'Temporizador';
}

setInterval(updateTime, 1000);
