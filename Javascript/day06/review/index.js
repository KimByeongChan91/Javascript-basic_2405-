const text1 = document.querySelector('.text1');
const openBtn = document.querySelector('.openBtn');
const closedBtn = document.querySelector('.closedBtn');

closedBtn.style.display = 'none';

closedBtn.addEventListener('click', () => {
  text1.type = 'text';
  closedBtn.style.display = 'block';
  openBtn.style.display = 'none';
});

openBtn.addEventListener('click', () => {
  text1.type = 'password';
  closedBtn.style.display = 'none';
  openBtn.style.display = 'block';
});
