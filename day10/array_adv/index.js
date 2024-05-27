//type casting: Number, String, Boolean,

// String -> Array

const coffee = 'americano';

// 1. split("")
coffee.split('');

// 2.  Array.from()

const a2 = Array.from(coffee);

// 3.  [...coffee](전개 구문)  @@@@이걸 많이 씀@@@@

const a3 = [...coffee];

//  모음 빼고 배열로 나타내기 [m,r,c,n]

const a4 = coffee.includes('a', 'e,', 'i', 'o');

const a5 = [...coffee].filter((v) => ![...'aieou'].some((v1) => v1 == v));

console.log(a5);

// 커피 americano 를 알파벳 e만 대문자로 해주고 배열로 나타내기

const a6 = [...coffee].map((v) => (v == 'e' ? v.toUpperCase() : v));
console.log(a6);

//Array -> String
const fruits = ['apple', 'banana', 'orange'];

//1. join('')
const b1 = fruits.join(''); // applebananaorange   @@이걸 많이 씀@@
const b2 = fruits.toString(); //apple,banana,orange 이건 쉼표가 붙어서 출력되어서 잘 안씀

console.log('----------');

//quiz a 빠진 과일들

const b3 = fruits.map((v) => [...v].filter((v1) => v1 != 'a').join(''));

console.log(b3);

// fruits 에 들어있는 모든 철자 풀어주기

const b4 = fruits.map((v) => [...v]).flat();
console.log(b4);

const b5 = [...fruits.join('')];
console.log(b5);

//reduce[누적시키다] acc[누적된값], curr[현재]

[1, 3, 5, 7, 9].reduce((a, c) => {
  console.log(`a:${a}, c:${c}`);
  return a + c;
});

// 1부터 10까지 더한 값@
Array(10)
  .fill(0)
  .map((v, i) => i + 1)
  .reduce((a, c) => a + c);

// [1~10] 홀수는 더하고 짝수는 빼기의 합

const a = Array(10)
  .fill(0)
  .map((v, i) => (i % 2 == 0 ? -(i + 1) : i + 1))
  .reduce((a, c) => a + c);

console.log(a);
