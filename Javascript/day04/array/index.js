// 데이터 타입: 기본[String,number,boolean,null,undifined] & 참조[Array]
// Array

// const colors = ['red', 'blue', 'Yellow', 'pink'];
// colors.push('#f1c40f'); // 배열에 추가해주세요
// colors.sort(); //배열을 정렬해주세요

// colors.forEach((x) => {
//   const colorBoxs = document.createElement('div');
//   colorBoxs.style.width = `100px`;
//   colorBoxs.style.height = `100px`;
//   colorBoxs.style.backgroundColor = x;

//   document.body.appendChild(colorBoxs);
// });
// 한명씩 불러주셈

// const menu = ['americano', 'latte', 'cafelatte', 'vanila'];

// menu.forEach((x) => {
//   console.log(x.toUpperCase());
// });

const prices = [2000, 3000, 5000, 4000, 6000];

//

// replace("a","b") [a를 b로]
// replaceAll(a,b) [모든 a를 b로]
// slice(a,b) [a,b-1] 까지 문자 짜르기
// split() 나누기

// const a = 'hello'.replace('l', 'z');
// console.log(a);

// const a = 'korea it';
// a.split('a');
// console.log(a);

const option = ['100 blue', '200 green', '500 black', '400 red'];
//wh:100 bg: blue wh:200 bg:green

option.forEach((x) => {
  const a = x.split(' ');
  const length = a[0];
  const color = a[1];

  const boxes = document.createElement('div');

  boxes.style.backgroundColor = color;
  boxes.style.height = `${length}px`;
  boxes.style.width = `${length}px`;

  document.body.appendChild(boxes);
});

const changeBox = document.createElement('button');

changeBox.innerText = `변경`;
changeBox.style.width = ``;

const changeSize = window.prompt('변경할 사이즈?');
const changeColor = window.prompt('변경할 색상?');

changeBox.addEventListener('click', () => {
  a[0].style.width = `${Number(changeSize)}`;
  a[0].style.height = `${Number(changeSize)}`;
  a[1].style.backgroundColor = `${changeColor}`;
});

document.body.appendChild(changeBox);

// 색깔바꾸기
//  버튼 만들고 프롬프트로 크기와 색깔 입력 받고 확인 누르면
// 입력한 크기와 색깔의 상자를 만드는 기능
