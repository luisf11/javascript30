let countdown;

const timerDisplay =  document.querySelector('.display__time-left');
const endTime =  document.querySelector('.display__end-time');
const timers = document.querySelectorAll('[data-time]');
const customTimer = document.customForm;



function timer(seconds) {

  clearInterval(countdown);

  const now = Date.now();
  const then = now + (seconds * 1000);
  displayTimeLeft(seconds)
  displayEndtime(then)
  
  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);

    if(secondsLeft < 0) {
      clearInterval(countdown)
      return;
    }

    displayTimeLeft(secondsLeft)
  }, 1000)
}


function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;

  const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;

  document.title = display;
  timerDisplay.textContent = display;
}


function displayEndtime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const minutes = end.getMinutes();

  const adjustedHour = hour > 12 ? hour - 12 : hour;
  const adjustedMinutes = minutes < 10 ? `0${minutes}` : minutes

  endTime.textContent = `Be Back At ${adjustedHour}:${adjustedMinutes}`;
}


function setTimer() {
  const seconds = parseInt(this.dataset.time)
  timer(seconds)
}

function setCustomTimer(e) {
  e.preventDefault();
  const mins = parseInt(this.minutes.value) * 60;
  timer(mins)
  this.reset();
}

timers.forEach(timer => timer.addEventListener('click', setTimer))
customTimer.addEventListener('submit', setCustomTimer)
