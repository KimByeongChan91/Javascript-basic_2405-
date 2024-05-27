const box = document.querySelector('.box');

// box.innerHTML = '<h1>My Friend</h1>';

// const newTag1 = document.createElement('div');
// const newTag2 = document.createElement('div');
// const newTag3 = document.createElement('div');

// newTag1.innerHTML = '<li>kim</li>';
// newTag2.innerHTML = '<li>lee</li>';
// newTag3.innerHTML = '<li>park</li>';

// box.appendChild(newTag1);
// document.body.appendChild(newTag2);
// document.body.appendChild(newTag3);

// const names = ['kim', 'lee', 'park'];

// names.forEach((v) => {
//   const newTag1 = document.createElement('div');
//   newTag1.innerHTML = `<li>${v}</li>`;

//   document.body.appendChild(newTag1);
// });

// box.innerHTML = `<h1>My Friend</h1>
// <ul>
// ${names.map((v)=>`<li>${v}</li>`)}
// </ul>
// `

const books = [
  {
    title: '자바스크립트 꿀잼',
    author: '손흥민',
    price: 30000,
    isSale: true,
  },
  {
    title: '타입스크립트 안쓰는법',
    author: '황희찬',
    price: 24000,
    isSale: false,
  },
  {
    title: '구글링 하다가 막혔을 때 코딩하는법',
    author: '김민재',
    price: 14000,
    isSale: true,
  },
];

// const isBookSale = (books) => (books.isSale ? books.price * 0.9 : books.price);
// box.innerHTML = `
// <h1>${book.title}</h1>
// <h4>${book.author}</h4>
// <span>${book.price}</span>
// <div>할인 된 가격: ${book.isSale ? book.price * 0.9 : book.price}</div>
// <div>할인 된 가격: ${isBookSale(book)}</div>

// `;

// 할인율 isSale: true -> 가격이 10% 할인된 가격으로 나타내기

// box.innerHTML = `
//     ${books
//       .map(
//         (v) => `
//     <h1>${v.title}</h1>
//     <h4>${v.author}</h1>
//     <span>할인 전 가격: ${v.price}</span>
//     <h5>할인 된 가격: ${v.isSale ? v.price * 0.9 : v.price}</h5>
//     <h5>할인 된 가격: ${isBookSale(books)}</h5>

//     `
//       )
//       .join('')}

// `;

// box.insertAdjacentHTML(어디에,무엇을)
// afterbegin: 맨 처음 자식으로
// beforeend: 맨 뒤 자식으로
// box.insertAdjacentHTML('afterbegin')
// box.insertAdjacentHTML('beforeend')

// box.insertAdjacentHTML(
//   'beforeend',
//   `
// <h1>${books[0].title}</h1>
// <h3>${books[0].author}</h3>
// <span>${books[0].price}</span>
// `
// );

const isBookSale = (books) => (books.isSale ? books.price * 0.9 : books.price);

box.insertAdjacentHTML(
  'beforeend',
  `
    ${books
      .map(
        (v) => `
    <h1>${v.title}</h1>
    <h4>${v.author}</h1>
    <span>할인 전 가격: ${v.price}</span>
    <h5>할인 된 가격: ${v.isSale ? v.price * 0.9 : v.price}</h5>
    <h5>할인 된 가격: ${isBookSale(v)}</h5>
    `
      )
      .join('')}
`
);

//방법 1

books.forEach((v) => {
  box.insertAdjacentHTML(
    'beforeend',
    `
    <h1>${v.title}</h1>
    <h4>${v.author}</h4>
    <span></span>
    `
  );
});

//방법 2

const makeBook = (book) =>
  `    <h1>${v.title}</h1>
    <h4>${v.author}</h4>
    <span>${isBookSale}</span>`;

books.forEach((v) => box.insertAdjacentHTML('beforeend', makeBook(v)));
