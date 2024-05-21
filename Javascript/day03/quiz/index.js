// 1. 색상 버튼 3개 임의로 만들기(선택된 색상: )
// 2. 파레트 상자 하나 만들기 (100px)
// 3. - + 버튼 만들기 (100px 이하로는 안줄어들게)

//       box
const box = document.createElement('div');

box.style.width = '100px';
box.style.height = '100px';
box.innerText = `색상 : 색상 없음`;
box.style.border = '1px solid';

//    colorBox
const colorBox1 = document.createElement('button');
const colorBox2 = document.createElement('button');
const colorBox3 = document.createElement('button');

const color1 = (colorBox1.innerText = 'red');
colorBox1.style.backgroundColor = 'red';

const color2 = (colorBox2.innerText = 'blue');
colorBox2.style.backgroundColor = 'blue';

const color3 = (colorBox3.innerText = 'green');
colorBox3.style.backgroundColor = 'green';

colorBox1.addEventListener('click', () => {
  box.style.backgroundColor = 'red';
  box.innerText = color1;
});

colorBox2.addEventListener('click', () => {
  box.style.backgroundColor = 'blue';
  box.innerText = color2;
});

colorBox3.addEventListener('click', () => {
  box.style.backgroundColor = 'green';
  box.innerText = color3;
});

//     index
const indexPlus = document.createElement('button');
const indexMin = document.createElement('button');

indexMin.innerText = `-`;
indexPlus.innerText = `+`;

indexPlus.addEventListener('click', () => {
  const length = parseInt(box.style.width) + 1;
  const isLength111 = length === 111;
  box.style.width = isLength111 ? `110px` : `${length}px`;
  box.style.height = isLength111 ? `110px` : `${length}px`;

  // box.style.width = `${length}px`;
  // box.style.height = `${length}px`;
});

indexMin.addEventListener('click', () => {
  const length = parseInt(box.style.width) - 1;
  const isLength99 = length === 99;
  box.style.width = isLength99 ? '100px' : `${length}px`;
  box.style.height = isLength99 ? '100px' : `${length}px`;
});

document.body.appendChild(box);
document.body.appendChild(colorBox1);
document.body.appendChild(colorBox2);
document.body.appendChild(colorBox3);

document.body.appendChild(indexMin);
document.body.appendChild(indexPlus);
