// 색깔 다섯개
// 사이즈 다섯개
// 테두리 사이즈 3개
// 버튼들이 나열됨

// const box = document.querySelector('.box');

// const redBtn = document.querySelector('.redBtn');
// const orangeBtn = document.querySelector('.orangeBtn');
// const yellowBtn = document.querySelector('.yellowBtn');
// const greenBtn = document.querySelector('.greenBtn');
// const blueBtn = document.querySelector('.blueBtn');

// const sizeBtns_100 = document.querySelector('.sizeBtns_100');
// const sizeBtns_200 = document.querySelector('.sizeBtns_200');
// const sizeBtns_300 = document.querySelector('.sizeBtns_300');
// const sizeBtns_400 = document.querySelector('.sizeBtns_400');
// const sizeBtns_500 = document.querySelector('.sizeBtns_500');

// const borderBtns_0 = document.querySelector('.borderBtns_0');
// const borderBtns_10 = document.querySelector('.borderBtns_10');
// const borderBtns_20 = document.querySelector('.borderBtns_20');

// const colorBtn = ['red', 'orange', 'yellow', 'green', 'blue'];
// const size = ['100px', '200px', '300px', '400px', '500px'];
// const borderRadi = ['0px', '10px', '20px'];

// redBtn.addEventListener('click', () => {
//   box.style.backgroundColor = colorBtn[0];
// });
// orangeBtn.addEventListener('click', () => {
//   box.style.backgroundColor = colorBtn[1];
// });
// yellowBtn.addEventListener('click', () => {
//   box.style.backgroundColor = colorBtn[1];
// });

// greenBtn.addEventListener('click', () => {
//   box.style.backgroundColor = colorBtn[1];
// });

// blueBtn.addEventListener('click', () => {
//   box.style.backgroundColor = colorBtn[1];
// });

// 강사님

const colorList = ['red', 'orange', 'yellow', 'green', 'blue'];

colorList.forEach((v) => {
  const btn = document.createElement('button');
  btn.innerText = v;
  btn.addEventListener('click', () => {
    const box = document.querySelector('.box');
    colorList.forEach((v) => box.classList.remove(v));
    box.classList.add(v);
  });
  const colorBtnListTag = document.querySelector('.colorBtnList');
  colorBtnListTag.appendChild(btn);
});

const sizeList = ['small', 'medium', 'large', 'x-large', 'xx-large'];

sizeList.forEach((v) => {
  const btn = document.createElement('button');
  btn.innerText = v;
  btn.addEventListener('click', () => {
    const Box = document.querySelector('.box');
    sizeList.forEach((v) => box.classList.remove(v));
    box.classList.add(v);
  });
  const sizeBtnListTag = document.querySelector('.sizeBtnList');
  sizeBtnListTag.appendChild(btn);
});

const radiusBtnList = ['radiusZero', 'radiusTen', 'radiusTwenty'];

radiusBtnList.forEach((v) => {
  const btn = document.createElement('button');
  sizeBtn.innerText = v;
  sizeBtn.addEventListener('click', () => {
    const sizeBox = document.querySelector('.box');
    radiusBtnList.forEach((v) => box.classList.remove(v));
    box.classList.add(v);
  });
  const radiusBtnListTag = document.querySelector('.radiusBtnList');
  sizeBtnListTag.appendChild(btn);
});

// 위 코드가 비슷한 패턴이니 하나로 묶어 함수화 하는 방법

const makeButtons = (x, y) => {
  x.forEach((v) => {
    const btn = document.createElement('button');
    btn.innerText = v;
    btn.addEventListener('click', () => {
      const box = document.querySelector('.box');
      x.forEach((v) => box.classList.remove(v));
      box.classList.add(v);
    });
    const listTag = document.querySelector(y);
    listTag.appendChild(btn);
  });
};

makeButtons(colorList, '.colorBtnList');
makeButtons(sizeList, '.sizeBtnList');
makeButtons(radiusList, '.radiusBtnList');
