// const clock = document.querySelector(".clock");

// function getTime() {
//   const date = new Date();
//   const hour = String(date.getHours());
//   const minute = String(date.getMinutes());
//   const second = String(date.getSeconds());
//   return {hour, minute, second};
// }

// function setDigit({hour, minute, second}) {
//   const twoDigitHour = hour.padStart(2,"0");
//   const twoDigitMinute = minute.padStart(2,"0");
//   const twoDigitSecond = second.padStart(2,"0");
//   return {twoDigitHour, twoDigitMinute, twoDigitSecond};

// }

// function showClock() {
//     const currentTime = getTime();
//     const twoDigitTime = setDigit(currentTime);
//     clock.innerText = (`${twoDigitTime.twoDigitHour}:${twoDigitTime.twoDigitMinute}:${twoDigitTime.twoDigitSecond}`);
//   }

// showClock();
// setInterval(showClock, 1000);

export const showClock = setInterval(() => {
  const clock = document.querySelector('.clock');
  const date = new Date();
  const hour = String(date.getHours());
  const minute = String(date.getMinutes());
  const second = String(date.getSeconds());
  clock.innerText = `${hour}:${minute}:${second}`;
}, 1000);
