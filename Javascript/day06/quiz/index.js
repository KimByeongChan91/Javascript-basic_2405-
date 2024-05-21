// 색깔 다섯개
// 사이즈 다섯개
// 테두리 사이즈 3개
// 버튼들이 나열됨

const box = document.querySelector('.box');

const redBtn = document.querySelector('.redBtn');
const orangeBtn = document.querySelector('.orangeBtn');
const yellowBtn = document.querySelector('.yellowBtn');
const greenBtn = document.querySelector('.greenBtn');
const blueBtn = document.querySelector('.blueBtn');

const sizeBtns_100 = document.querySelector('.sizeBtns_100');
const sizeBtns_200 = document.querySelector('.sizeBtns_200');
const sizeBtns_300 = document.querySelector('.sizeBtns_300');
const sizeBtns_400 = document.querySelector('.sizeBtns_400');
const sizeBtns_500 = document.querySelector('.sizeBtns_500');

const borderBtns_0 = document.querySelector('.borderBtns_0');
const borderBtns_10 = document.querySelector('.borderBtns_10');
const borderBtns_20 = document.querySelector('.borderBtns_20');

const colorBtn = ['red', 'orange', 'yellow', 'green', 'blue'];
const size = ['100px', '200px', '300px', '400px', '500px'];
const borderRadi = ['0px', '10px', '20px'];

redBtn.addEventListener('click', () => {
  box.style.backgroundColor = colorBtn[0];
});
orangeBtn.addEventListener('click', () => {
  box.style.backgroundColor = colorBtn[1];
});
yellowBtn.addEventListener('click', () => {
  box.style.backgroundColor = colorBtn[1];
});

greenBtn.addEventListener('click', () => {
  box.style.backgroundColor = colorBtn[1];
});

blueBtn.addEventListener('click', () => {
  box.style.backgroundColor = colorBtn[1];
});
