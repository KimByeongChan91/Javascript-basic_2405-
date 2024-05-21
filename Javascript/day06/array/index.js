// 데이터 타입: 기본 + 참조
// 기본: number, string, null, undefined, boolean
// 참조: array

// String() or '' or +
// number = Number() or 123123 or +
// boolean = Boolean() or true or !
//Array = Array() or []

// const fruit = []
// const coffee = Array()

// const fruits = ['apple', 'banana', 'orange', 'kiwi'];

// // 인덱스
// fruits[0]; // apple
// fruits[1]; // banana

// // 추가 및 갱신
// fruits.push('grape');
// fruits[0] = 'mango';

// // 삭제
// fruits.pop(); // 맨 뒤에 삭제
// delete fruits[1]; // banana 삭제

// 가공하는 기능
// 1. 변형 - push, pop, reverse, shift[맨앞에 짜르기], 낷
// 2. 접근자 - indexof[몇번째?], slice[짜르고 새로운 배열로 주기]
// 3. 반복[()=>{}](★) - forEach, map

// const num = [3, 7, 91, 300, 23, 124];

// // 요소 바꾸기
// const newArr = num.map((v) => {
//   return v + 10;
// });
// // ->
// const newArr = num.map((v) => v + 10);

// const newArr2 = num.map((v) => {
//   return v + 100;
// });
// // ->
// const newArr2 = num.map((v) => v ** 2);

// const newArr3 = num.map((v) => {
//   return v ** 2;
// });
// // ->
// const newArr3 = num.map((v) => v ** 2);

// const newArr4 = num.map((v) => {
//   if (v % 2 == 1) return v ** 2;
//   else if (v % 2 == 0) return v * 100;
// });
// // ->
// const newArr4 = num.map((v) => (v % 2 == 1 ? v ** 2 : v * 100));

// const num1 = [3, 7, 91, 300, 23, 124];
// const fruits1 = [
//   'apple',
//   'banana',
//   'orange',
//   'kiwi',
//   'mango',
//   'durian',
//   'strawberry',
//   'melon',
//   'watermelon',
// ];

// const num1Arr = num1.filter((v) => {
//   return v > 10;
// });
// // ->
// const num1Arr = num1.filter((v) => v > 10);

// const num2Arr = num1.filter((v) => {
//   return v % 2 == 0;
// });
// // ->
// const num2Arr = num1.filter((v) => v % 2 == 0);

// const fruitArr1 = fruits1.filter((v) => {
//   return v.length == 6;
// });
// // ->
// const fruitArr1 = fruits1.filter((v) => v.length == 6);

// // 알파벳 i가 들어가 있으면 제거하고, 제거 후 단어의 문자의 길이로 치환

// // map은 바꿔줘 filter는 걸러줘

// // 체이닝
// const fruitArr1 = fruits1
//   .filter((v) => {
//     return !v.includes('i');
//   })
//   .map(() => {
//     return v.length;
//   });
// // ->
// const fruitArr1 = fruits1.filter((v) => !v.includes('i')).map(() => v.length);

// const fruitsArr2 = fruitArr1.map((v) => {
//   return v.length;
// });
// // ->
// const fruitsArr2 = fruitArr1.map((v)=>  v.length)

// //every && some
// const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const every1 = arr3.every((v) => {
//   return v > 0;
// });
// // ->
// const every1 = arr3.every((v)=> v > 0)

// const some1 = arr3.some((v) => {
//   return v >= 10;
// });
// // ->
// const some1 = arr3.some((v)=> v >= 10)

// console.log(`every1: ${every1}`);
// console.log(`some1: ${some1}`);
