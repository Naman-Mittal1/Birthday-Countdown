const daysE1 = document.getElementById('days');
const hoursE1 = document.getElementById('hours');
const minutesE1 = document.getElementById('minutes');
const secondsE1 = document.getElementById('seconds');

const newYear = "8 Apr 2023";

function countdown() {
    const newYearDate  = new Date(newYear);
    const currentDate = new Date();

    const totalSeconds = (newYearDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds/3600/24);
    const hours = Math.floor(totalSeconds/3600) % 24;
    const mins = Math.floor(totalSeconds/3600) % 60;
    const seconds = Math.floor(totalSeconds) % 60

    daysE1.innerHTML = formatTime(days);
    hoursE1.innerHTML = formatTime(hours);
    minutesE1.innerHTML = formatTime(mins);
    secondsE1.innerHTML = formatTime(seconds);
}

function formatTime(time){
    if(time<0)
        return 0;
    else
        return time<10 ? (`0${time}`) : time
}
countdown()
setInterval(countdown, 1000);

