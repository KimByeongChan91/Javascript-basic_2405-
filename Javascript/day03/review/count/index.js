// - 0 +

const down = document.createElement(`button`);
const up = document.createElement(`button`);
const num = document.createElement(`span`);

down.innerText = `-`;
num.innerText = '0';
up.innerText = `+`;

down.addEventListener('click', () => {
  num.innerText = Number(num.innerText) - 1;
});

up.addEventListener('click', () => {
  num.innerText = Number(num.innerText) + 1;
});

document.body.appendChild(down);
document.body.appendChild(num);
document.body.appendChild(up);
