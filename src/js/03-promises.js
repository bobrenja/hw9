// import Notify from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'notiflix/dist/notiflix-3.2.5.min.css';

const refs = {
  form: document.querySelector('.form'),
  valueDelay: document.querySelector('input[name="delay"]'),
  valueStep: document.querySelector('input[name="step"]'),
  valueAmount: document.querySelector('input[name="amount"]'),
};

refs.form.addEventListener('submit', e => {
  e.preventDefault();
  let countDelay = Number(refs.valueDelay.value);

  for (let i = 1; i <= refs.valueAmount.value; i+=1) {
    createPromise(i, countDelay)
      .then(({ position, delay }) => {
        onSucces(position, delay)
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        error(position,delay);
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    countDelay += Number(refs.valueStep.value);
  }

  const x = refs.valueDelay.value;
  // console.log(refs.valueDelay.value);
  // console.log(refs.valueStep.value);
  // console.log(refs.valueAmount.value);
});

function createPromise(position, delay) {
  return new Promise((resolve, rejeck) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {

      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        rejeck({ position, delay });
      }
    }, delay);
  });
}

function error(position, delay) {
  Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`), {
    clickToClose: true,
    position: 'center-top',
    timeout: 5000,
  };
}

function onSucces(position, delay) {
  Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`), {
    clickToClose: true,
    position: 'center-top',
    timeout: 5000,
  };
}