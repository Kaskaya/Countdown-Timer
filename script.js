let days1 = document.getElementById('d');
let hours1 = document.getElementById('hr');
let mins1 = document.getElementById('min');
let sec1 = document.getElementById('sec');

const newYears = '1 Apr 2023'; //You can change this date

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = (newYearsDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  days1.innerHTML = days;
  hours1.innerHTML = formatTime(hours);
  mins1.innerHTML = formatTime(minutes);
  sec1.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);
