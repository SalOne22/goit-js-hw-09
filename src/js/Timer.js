export default class Timer {
  constructor(delay = 1000, fields = {}) {
    this.targetDate = Date.now();
    this.delay = delay;
    this.fields = fields;

    this.days = 0;
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
  }

  start() {
    this.update();

    this.id = setInterval(() => {
      if (this.targetDate <= Date.now()) {
        this.stop();
        return;
      }

      this.update();
    }, 1000);
  }

  stop() {
    clearInterval(this.id);
  }

  update() {
    this.#updateRemainedTime();
    this.#updateFields();
  }

  #updateFields() {
    this.fields.days.textContent = addLeadingZero(this.days);
    this.fields.hours.textContent = addLeadingZero(this.hours);
    this.fields.minutes.textContent = addLeadingZero(this.minutes);
    this.fields.seconds.textContent = addLeadingZero(this.seconds);
  }

  #updateRemainedTime() {
    const remainedTime = this.#convertMs(this.targetDate - Date.now());

    this.days = remainedTime.days;
    this.hours = remainedTime.hours;
    this.minutes = remainedTime.minutes;
    this.seconds = remainedTime.seconds;
  }

  #convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
  }
}

function addLeadingZero(num) {
  return String(num).padStart(2, '0');
}
