'use strict'
const timer = (deadline) => {
    // html элементы для вставки таймера
    const timers = document.querySelectorAll('.order')

    // функция форматирования в 00:00:00:00
    const getNullAdd = function (param) {
        if (param < 10) {
            return '0' + param;
        } else {
            return param
        }
    }
    // расчёт времени до deadline
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
    // обновление данных в элементах html
    const getTimer = () => {
        let getTime = getTimeRemaining();
        timers.forEach(timer => {
            const timerDays = timer.querySelector('div.count_1 span');
            const timerHours = timer.querySelector('div.count_2 span');
            const timerMinutes = timer.querySelector('div.count_3 span');
            const timerSeconds = timer.querySelector('div.count_4 span');
    
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
        })
    }

    let getTime = getTimeRemaining()
        if (getTime.timeRemaining > 0) {
            setInterval(getTimer, 1000)
        }
        getTimer() 
}

export default timer