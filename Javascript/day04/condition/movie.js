// querySelector() (document에서 찾아주세요)

const btnMin = document.querySelector('.minBtn');
const btnPlus = document.querySelector('.plusBtn');
const ticketNumber = document.querySelector('.count');
const priceAll = document.querySelector('.price');

// ticketNumber.innerText = parseInt(ticketNumber.innerText);

btnPlus.addEventListener('click', () => {
  const ticketCount = parseInt(ticketNumber.innerText) + 1;
  const ticketPrice = ticketCount * 10000;

  if (ticketCount >= 10) {
    priceAll.innerText = ticketPrice * 0.8;
  } else if (ticketCount >= 5) {
    priceAll.innerText = ticketPrice * 0.9;
  } else {
    priceAll.innerText = ticketPrice * 1;
  }
  ticketNumber.innerText = Number(ticketNumber.innerText) + 1;
});

btnMin.addEventListener('click', () => {
  const ticketCount = parseInt(ticketNumber.innerText) - 1;
  const ticketPrice = ticketCount * 10000;

  if (ticketCount >= 10) {
    priceAll.innerText = ticketPrice * 0.8;
    ticketNumber.innerText = Number(ticketNumber.innerText) - 1;
  } else if (ticketCount >= 5) {
    priceAll.innerText = ticketPrice * 0.9;
    ticketNumber.innerText = Number(ticketNumber.innerText) - 1;
  } else if (5 > ticketCount && ticketCount > 0) {
    priceAll.innerText = ticketPrice * 1;
    priceAll.innerText = Number(priceAll.innerText) - 1;
  } else {
    priceAll.innerText = 0;
    ticketCount.innerText = 0;
  }
});

// if (ticketNumber >= 5) {
//   priceAll.innerText = parseFloat(priceAll.innerText) * 0.9;
// } else if (ticketNumber >= 10) {
//   priceAll.innerText = parseFloat(priceAll.innerText) * 0.8;
// }
