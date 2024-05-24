// 1. 커피 메뉴 고르기
// 아메리카노, 라떼
//3000원    4000원
// 추가하기
// 총액: 0원에서 올라감

// const coffeeList = [
//   {
//     coffeeName: 'americano',
//     coffeePrice: 3000,
//   },
//   {
//     coffeeName: 'latte',
//     coffeePrice: 4000,
//   },
// ];

// let total = 0;
// const totalDiv = document.createElement('div');

// coffeeList.forEach((v) => {
//   const newDiv = document.createElement('button');
//   newDiv.innerText = v.coffeeName;
//   document.body.appendChild(newDiv);

//   newDiv.addEventListener('click', () => {
//     totalDiv.innerText = `총액: ${(total += v.coffeePrice)}`;

//     document.appendChild(newDiv);
//   });

//   document.body.appendChild(totalDiv);
// });

const coffeeList1 = [
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
  {
    coffeeName: '솔의눈',
    coffeePrice: 3000,
  },
  {
    coffeeName: '카스',
    coffeePrice: 4000,
  },
  {
    coffeeName: '바나나 우유',
    coffeePrice: 1500,
  },
  {
    coffeeName: '사이다',
    coffeePrice: 1500,
  },
  {
    coffeeName: '제로콜라',
    coffeePrice: 2000,
  },
  {
    coffeeName: '데자와',
    coffeePrice: 3000,
  },
  {
    coffeeName: '비타500',
    coffeePrice: 500,
  },
  {
    coffeeName: '요거트스무디',
    coffeePrice: 6000,
  },
  {
    coffeeName: '초코우유',
    coffeePrice: 3000,
  },
  {
    coffeeName: '돌체라떼',
    coffeePrice: 4000,
  },
  {
    coffeeName: '딸기라떼',
    coffeePrice: 3500,
  },
  {
    coffeeName: '민트라떼',
    coffeePrice: 5000,
  },
  {
    coffeeName: '비타천',
    coffeePrice: 1000,
  },
  {
    coffeeName: '테라',
    coffeePrice: 2500,
  },
];

let total = 0;
const totalDiv = document.createElement('div');

coffeeList1.forEach((v) => {
  const newDiv = document.createElement('button');
  newDiv.innerText = v.coffeeName;

  totalDiv.innerText = total

  document.body.appendChild(newDiv);

});

document.body.appendChild(totalDiv)
