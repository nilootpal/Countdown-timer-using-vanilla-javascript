const myBirthday = "July 3, 2022";
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

function countdown(){
    const myBirthdate = new Date(myBirthday);
    const currentDate = new Date();

    const timeDiff = (myBirthdate - currentDate)/1000;

    const seconds = Math.floor(timeDiff%60);
    const minutes = Math.floor(timeDiff/60)%60;
    const hours = Math.floor(timeDiff/3600)%24;
    const days = Math.floor(timeDiff/(3600*24));

    daysEl.innerText = formatTime(days);
    hoursEl.innerText = formatTime(hours);
    minutesEl.innerText = formatTime(minutes);
    secondsEl.innerText = formatTime(seconds);
}
//initial call
countdown();

setInterval(countdown, 1000);