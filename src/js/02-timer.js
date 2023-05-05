import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Timer from './Timer';

const TIMER_DELAY = 1000;

const refs = {
  startBtn: document.querySelector('[data-start]'),
  timerFields: {
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
  },
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    handlePickedDate(selectedDates[0]);
  },
};

flatpickr('#datetime-picker', options);

const timer = new Timer(TIMER_DELAY, refs.timerFields);

refs.startBtn.addEventListener('click', onStartClick);
refs.startBtn.disabled = true;

function onStartClick() {
  timer.start();
}

function handlePickedDate(date) {
  timer.stop();

  if (date < Date.now()) {
    Notify.failure('Please choose a date in the future');
    refs.startBtn.disabled = true;
    return;
  }

  refs.startBtn.disabled = false;
  timer.targetDate = date;
}
