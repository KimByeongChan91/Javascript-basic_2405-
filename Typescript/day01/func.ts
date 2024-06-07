function add(x: number, y: number): Number {
  return x + y;
}

// truthy or falsy 해주는 함수 만들기(string) => boolean

function makeBoolean(x: String): boolean {
  return !!x;
}

const minus = (x: number, y: number): number => x - y;
console.log(minus(10, 5));

//1. 태어난 년도로 띠 알아보기

//내가 한 것
// function change(x: number): string {
//   if (x % 12 == 0) {
//     console.log('쥐띠');
//   } else if (x % 12 == 1) {
//     console.log('소띠');
//   } else if (x % 12 == 2) {
//     console.log('호랑이띠');
//   } else if (x % 12 == 3) {
//     console.log('토끼띠');
//   } else if (x % 12 == 4) {
//     console.log('용띠');
//   } else if (x % 12 == 5) {
//     console.log('뱀띠');
//   } else if (x % 12 == 6) {
//     console.log('말띠');
//   } else if (x % 12 == 7) {
//     console.log('양띠');
//   } else if (x % 12 == 8) {
//     console.log('원숭이띠');
//   } else if (x % 12 == 9) {
//     console.log('닭띠');
//   } else if (x % 12 == 10) {
//     console.log('개띠');
//   } else if (x % 12 == 11) {
//     console.log('돼지띠');
//   }
//   return String(x);
// }
// change(1991);

//강사님 한것
const makeZodiac = (year: number): string => {
  const zodiac = [
    '원숭이',
    '닭',
    '개',
    '돼지',
    '쥐',
    '소',
    '호랑이',
    '토끼',
    '용',
    '뱀',
    '말',
    '양',
  ];
  const animal = zodiac[year % 12];
  return '앙' + animal + '띠~';
};

//2. 숫자 뒤집기
//내가 한 것
function alignNumber(a: number, b: number, c: number, d: number, e: number) {
  const numArr = [a, b, c, d, e].sort().reverse();
  return numArr;
}
console.log(alignNumber(2, 4, 1, 3, 6));

// 강사님 한 것
const reversedNumber = (num: number): number[] =>
  [...String(num)].reverse().map((v) => Number(v));

//3. 짝수는 싫어요
const hateEven = (n: number) =>
  Array(n + 1)
    .fill(0)
    .map((_, i) => i)
    .filter((v) => v % 2);
console.log(hateEven(15));
