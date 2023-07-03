const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const deadline = document.querySelector('.deadline');
const giveaway = document.querySelector('.giveaway');
const items = document.querySelectorAll('.deadline-format h4');

function format(item) {
  if (item < 10) {
    return (item = `0${item}`);
  } else {
    return item;
  }
}
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// let futureDate = new Date(2023, 5, 8, 11, 12, 0);
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 15, 30, 0);

const year = futureDate.getFullYear();
const weekday = weekdays[futureDate.getDay()];
const hours = futureDate.getHours();
const minutes = format(futureDate.getMinutes());
const month = months[futureDate.getMonth()];
const day = futureDate.getDate();

giveaway.textContent = `giveaway ends on ${weekday}, ${day} ${month} ${year}, ${hours}:${minutes}.`;

// future time in miliseconds
const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const remainingTime = futureTime - today;
  // 1s = 1000ms
  // 1min = 60s
  // 1hr = 60min
  // 1day= 24hr

  let daysRemaining = remainingTime / (24 * 60 * 60 * 1000);
  let hoursRemaining = (daysRemaining - Math.floor(daysRemaining)) * 24;
  let minutesRemaining = (hoursRemaining - Math.floor(hoursRemaining)) * 60;
  let secondsRemaining = (minutesRemaining - Math.floor(minutesRemaining)) * 60;

  const days = Math.floor(daysRemaining);
  const hours = Math.floor(hoursRemaining);
  const minutes = Math.floor(minutesRemaining);
  const seconds = Math.floor(secondsRemaining);

  values = [days, hours, minutes, seconds];

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    } else {
      return item;
    }
  }

  items.forEach(function (items, index) {
    items.innerHTML = format(values[index]);
  });
  if (remainingTime < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class ="expired">sorry, this giveaway has expired</h4>`;
  }
}
// countdown
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();
