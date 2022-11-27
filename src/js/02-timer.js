import flatpickr from 'flatpickr';
import { Ukrainian } from 'flatpickr/dist/l10n/uk.js';
// import Notify from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'notiflix/dist/notiflix-3.2.5.min.css';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';
require('flatpickr/dist/themes/material_green.css');

const refs = {
  start: document.querySelector('button[data-start]'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
  all: document.querySelectorAll('.value'),
};

refs.start.setAttribute('disabled', 'disabled');

const date = new Date();
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  locale: Ukrainian,

  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] < date) {
      refs.start.setAttribute('disabled', 'disabled');

      Notify.failure('Please choose a date in the future', {
        clickToClose: true,
        position: 'center-top',
        timeout: 5000,
      });
      return;
    }
    
    refs.start.removeAttribute('disabled');
  },
};

const selectData = flatpickr(
  '#datetime-picker',
  options
  // {
  //   enableTime: true,
  //   dateFormat: 'Y-m-d H:i',
  //   locale: Ukrainian,
  //   minDate: date,
  //   disableMobile: 'true',
  // }
);

refs.start.addEventListener('click', startTimer);
let timerId = null;
let timeFinish = null;

function startTimer() {
  refs.start.setAttribute('disabled', 'disabled');
  Notify.success('Run START timer!!', {
    clickToClose: true,
    position: 'center-top',
    timeout: 2000,



  });
  timerId = setInterval(changeDay, 1000);
  

  console.log(refs.all);

  //     refs.all.forEach(e=>{
  //         console.log(e.innerText)
  //         e.textContent = a++
  // })
}

function changeDay() {
  timeFinish = selectData.selectedDates[0] - new Date();
  const timeConvertData = convertMs(timeFinish);
  addText(timeConvertData);

  if (timeFinish < 1000) clearInterval(timerId);
}

function addText(value) {
  refs.all.forEach(e => {
    // console.log()
    const keyData = Object.keys(e.dataset);
    e.textContent = value[keyData[0]];
  });
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}
