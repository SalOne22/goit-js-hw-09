import { Notify } from 'notiflix/build/notiflix-notify-aio';

Notify.init({
  useIcon: false,
});

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();

  const startDelay = Number(evt.target.delay.value);
  const step = Number(evt.target.step.value);
  const amount = Number(evt.target.amount.value);

  let delay = startDelay;

  for (let i = 0; i < amount; i += 1) {
    createPromise(i + 1, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });

    delay += step;
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) resolve({ position, delay });

      reject({ position, delay });
    }, delay);
  });
}
