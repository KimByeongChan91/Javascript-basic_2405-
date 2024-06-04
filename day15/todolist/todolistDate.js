export const datefunc = setInterval(() => {
  const day = document.querySelector('.day');
  const date = new Date();
  day.innerText = `${date.toLocaleString()}`;
}, 1000);
