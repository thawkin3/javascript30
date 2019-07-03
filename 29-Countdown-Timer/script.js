(function() {
  let countdown;
  const timerDisplay = document.querySelector('.display__time-left');
  const endTimeDisplay = document.querySelector('.display__end-time');
  const buttons = document.querySelectorAll('[data-time]');

  function timer(seconds) {
    clearInterval(countdown);

    const now = Date.now();
    const then = now + (seconds * 1000);
    displayTimeLeft(seconds);
    displayEndTime(then);

    countdown = setInterval(() => {
      // really neat trick for avoiding issues with timeout/intervals that occur when switching tabs.
      // rather than keeping a secondsLeft value and decrementing it each second,
      // actually compare the current time with the start time and recalculate secondsLeft each time
      const secondsLeft = Math.round((then - Date.now()) / 1000);

      if (secondsLeft < 0) {
        clearInterval(countdown);
        timerDisplay.textContent = 'TIME!';
        return;
      }
      displayTimeLeft(secondsLeft);
    }, 1000);
  }

  function displayTimeLeft(seconds) {
    let secondsLeft = seconds;
    const hours = Math.floor(secondsLeft / 3600);
    secondsLeft = secondsLeft % 3600;

    const minutes = Math.floor(secondsLeft / 60);
    secondsLeft = secondsLeft % 60;

    const hoursDisplay = `${hours < 10 ? '0' : '' }${hours}`;
    const minutesDisplay = `${minutes < 10 ? '0' : ''}${minutes}`;
    const secondsDisplay = `${secondsLeft < 10 ? '0' : '' }${secondsLeft}`;
    const display = `${hoursDisplay}:${minutesDisplay}:${secondsDisplay}`;
    document.title = display;
    timerDisplay.textContent = display;
  }

  function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const adjustedHour = hour > 12 ? hour - 12 : hour;
    const minutes = end.getMinutes();
    endTimeDisplay.textContent = `Be Back At ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes}`;
  }

  function startTimer() {
    const seconds = parseInt(this.dataset.time);
    timer(seconds);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const mins = this.minutes.value;
    timer(Math.round(mins * 60));
    this.reset();
  }

  buttons.forEach(button => button.addEventListener('click', startTimer));
  document['minutes-form'].addEventListener('submit', handleSubmit);
})();
