import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

let chosenDate = null;
let intervalId = null;

const startBtn = document.querySelector("[data-start]");
const dateInput = document.querySelector("#datetime-picker");

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    chosenDate = selectedDates[0];

    if (chosenDate < new Date()) {
      iziToast.show({
        message: "Please choose a date in the future",
      });
      startBtn.disabled = true;
      return;
    }

    startBtn.disabled = false;
  },
};

flatpickr("#datetime-picker", options);

startBtn.addEventListener("click", () => {
  if (intervalId) clearInterval(intervalId);

  startBtn.disabled = true;
  dateInput.disabled = true;

  intervalId = setInterval(() => {
    const currentTime = Date.now();
    const diff = chosenDate - currentTime;

    if (diff <= 0) {
      clearInterval(intervalId);
      updateTimer({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
      dateInput.disabled = false;
      startBtn.disabled = true;
      return;
    }

    const time = convertMs(diff);
    updateTimer(time);
  }, 1000);
});

function updateTimer({ days, hours, minutes, seconds }) {
  document.querySelector("[data-days]").textContent = addLeadingZero(days);
  document.querySelector("[data-hours]").textContent = addLeadingZero(hours);
  document.querySelector("[data-minutes]").textContent = addLeadingZero(minutes);
  document.querySelector("[data-seconds]").textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
  return String(value).padStart(2, "0");
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
