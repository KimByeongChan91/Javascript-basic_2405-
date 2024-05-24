// const menus = [
//     {
//       coffeeName: 'americano',
//       coffeePrice: 3000,
//     },
//     {
//       coffeeName: '라떼',
//       coffeePrice: 4000,
//     },
//     {
//       coffeeName: '레몬에이드',
//       coffeePrice: 2500,
//     },
//   ];

// const makeName = (name) => {
//   // makeName 태그를 만드는 메서드
//   const h3 = document.createElement('h3'); // h3 태그 생성
//   h3.innerText = name; //   h3 태그 텍스트는  name
//   return h3;
// };

// const makePrice = (price) => {
//   const h5 = document.createElement('h5');
//   h5.innerText = price + '원';
//   return h5;
// };

// const makeButton = (price) => {
//   const btn = document.createElement('button');
//   btn.innerText = '추가하기';
//   btn.addEventListener('click', () => {
//     const total = document.querySelector('.total');
//     total.innerText = parseInt(total.innerText) + price + '원';
//   });
//   return btn;
// };

// const makeCoffee = (coffeeObj) => {
//   const coffeeBox = document.createElement('div');
//   coffeeBox.appendChild(makeName(coffeeObj.coffeeName));
//   coffeeBox.appendChild(makePrice(coffeeObj.coffeePrice));
//   coffeeBox.appendChild(makeButton(coffeeObj.coffeePrice));
//   document.querySelector('.menu').appendChild(coffeeBox);
// };
// menus.forEach((v) => makeCoffee(v));

// 위 코드를
// 아래와 같이 바꿔봄

const menus = [
  {
    coffeeName: 'americano',
    coffeePrice: 3000,
  },
  {
    coffeeName: '라떼',
    coffeePrice: 4000,
  },
  {
    coffeeName: '레몬에이드',
    coffeePrice: 2500,
  },
];

const total1 = document.querySelector('.total');
let total = 0;

menus.forEach((v) => {
  const h3 = document.createElement('h3');
  h3.innerText = v.coffeeName;

  const h5 = document.createElement('h5');
  h5.innerText = v.coffeePrice;

  const btn = document.createElement('button');
  btn.innerText = '추가하기';

  btn.addEventListener('click', () => {
    total1.innerText = `total : ${(total += v.coffeePrice)} 원`;
  });

  const menu = document.querySelector('.menu');

  menu.appendChild(h3);
  menu.appendChild(h5);
  menu.appendChild(btn);
});
