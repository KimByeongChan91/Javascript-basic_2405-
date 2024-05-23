//참조: array, element, object

const coffee = {
  coffeeName: '아메리카노',
  coffeePrice: 2000,
  hasShot: true,
};

const coffee1 = {
  coffeeName: '라떼',
  coffeePrice: 2500,
  hasShot: true,
};

//book title author publishedYear pages
// object 타입
const book = {
  title: '코딩이란 무엇인가',
  auther: '김병찬',
  publishedYear: 20240522,
  pages: 5,
};

book['title']; // 코딩이란 무엇인가
book.title; // 코딩이란 무엇인가

book.color = 'green'; //  object 추가
delete book.pages; // object 삭제

'auther' in book; //true or false

console.log(book);
