const buttonMin = document.createElement(`button`);
const buttonPlus = document.createElement(`button`);
const count = document.createElement(`span`);

buttonMin.innerText = `-`;
buttonPlus.innerText = `+`;
count.innerText = '0';

buttonMin.addEventListener('click', () => {
  const isZero = parseInt(count.innerText) === 0;
  count.innerText = isZero ? 0 : parseInt(count.innerText) - 1;
});

buttonPlus.addEventListener('click', () => {
  count.innerText = parseInt(count.innerText) + 1;
});

document.body.appendChild(buttonMin);
document.body.appendChild(count);
document.body.appendChild(buttonPlus);
