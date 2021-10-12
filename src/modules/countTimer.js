const countTimer = (deadLine) => {
    const timerHour = document.querySelector('#timer-hours'),
        timerMinutes = document.querySelector('#timer-minutes'),
        timerSeconds = document.querySelector('#timer-seconds');

    function getTimeRemaining() {
        const dateStop = new Date(deadLine).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = (dateStop - dateNow) / 1000,
            second = Math.floor(timeRemaining % 60),
            minutes = Math.floor((timeRemaining / 60) % 60),
            hours = Math.floor(timeRemaining / 60 / 60);
        //let day = Math.floor(timeRemaining / 60 / 60 /24);
        return { timeRemaining, hours, minutes, second };
    }

    let interval;
    function updateClock() {
        const timer = getTimeRemaining();
        if (timer.timeRemaining > 0){
            timerHour.textContent = ('0' + timer.hours).slice(-2);
            timerMinutes.textContent = ('0' + timer.minutes).slice(-2);
            timerSeconds.textContent = ('0' + timer.second).slice(-2);
        } else {
            clearInterval(interval);
            timerHour.textContent = '00';
            timerMinutes.textContent = '00';
            timerSeconds.textContent = '00';
        }
    }
    updateClock();
    interval = setInterval(updateClock, 1000);
};

export default countTimer;