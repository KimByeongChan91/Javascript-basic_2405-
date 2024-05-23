//함수(기능): input -> output

// 일반함수
// function 함수명 (매개변수){리턴값}

// function makeCoffee(x) {
//   return x + '완료되었습니다.';
// }

// const a = makeCoffee('아메리카노');
// const b = makeCoffee('연유라떼');

// console.log(a);
// console.log(b);

// function makeSquare(x) {
//   return x ** 2;
// }

// const c = makeSquare(10);
// console.log(c);

// // 화살표 함수@@
// // ()=>{}
// const makeBread = (x) => {
//   return x + '빵이 완료되었습니다.';
// };

// const d = makeBread('1번 고객님 ');
// console.log(d);

// //1. 어떤 수를 입력하면 세제곱을 돌려주는 함수
// const returnSquare = (x) => {
//   return x ** 3;
// };

// const e = returnSquare(5);
// console.log(e);

// //2. 대문자를 입력하면, 소문자 + '완료!'를 돌려주는 함수

// const returnLowerCase = (x) => {
//   return x.toLowerCase() + '완료!';
// };

// const f = returnLowerCase('ASD');
// console.log(returnLowerCase);

// //3. 어떤 x를 입력하면, truthy 인기 falsy인지 알려주는 함수

// const isTruthy = (x) => (!!x ? 'truthy' : 'falsy');

// const g = isTruthy(0);
// console.log(g);

// x가 들어오면 body태그에 x의 innerText를 가진 버튼을 추가해주는 함수

const makeButton = (x) => {
  const btn = document.createElement('button');
  btn.innerText = x;
  document.body.appendChild(btn);
};

makeButton('hello');
