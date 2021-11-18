'use strict'
const timer = (deadline) => {
    // const timerBlock = document.getElementById('.count-wrap');
    const timerDays = document.querySelector('div.count_1 span');
    const timerHours = document.querySelector('div.count_2 span');
    const timerMinutes = document.querySelector('div.count_3 span');
    const timerSeconds = document.querySelector('div.count_4 span');

    const getNullAdd = function (param) {
        if (param < 10) {
            return '0' + param;
        } else {
            return param
        }
    }
    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime()
        let dateNow = new Date().getTime();
        let timeRemaining = (dateStop - dateNow) / 1000;
        let days = getNullAdd(Math.floor(timeRemaining / 60 / 60 / 24));
        let hours = getNullAdd(Math.floor(timeRemaining / 60 / 60) % 24);
        let minutes = getNullAdd(Math.floor((timeRemaining / 60) % 60));
        let seconds = getNullAdd(Math.floor(timeRemaining % 60));
        return {timeRemaining, days, hours, minutes, seconds}
        
    }
    const updateClock = () => {
        let getTime = getTimeRemaining();
        if (getTime.timeRemaining < 0) {
            timerDays.textContent = getNullAdd(0);
            timerHours.textContent = getNullAdd(0);
            timerMinutes.textContent = getNullAdd(0);
            timerSeconds.textContent = getNullAdd(0);
        } else {
            timerDays.textContent = getTime.days;
            timerHours.textContent = getTime.hours;
            timerMinutes.textContent = getTime.minutes;
            timerSeconds.textContent = getTime.seconds;
        }
    }
    let getTime = getTimeRemaining()
    if (getTime.timeRemaining > 0) {
        setInterval(updateClock, 1000)
    }
    updateClock()
    
}

export default timer