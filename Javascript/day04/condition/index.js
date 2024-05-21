// if 조건문
// if (조건식)

// const age = Number(window.prompt('몇살?'));
// if (age > 19) {
//   console.log('성인이네?');
// } else {
//   console.log(`미성년자구나?`);
// }
// console.log(`프로그램 끝`);

// Quiz
// prompt로 두 개의 숫자를 입력 받고
// 큰 수를 콘솔로 출력하기.

// const num1 = Number(window.prompt(`첫번째 수`));
// const num2 = Number(window.prompt(`두번째 수`));

// if (num1 >= num2) {
//   console.log(`${num1} 가 큽니다.`);
// } else {
//   console.log(`${num2} 가 큽니다.`);
// }

// const age = 15;

// if(age > 19){
//     console.log(`성인`)
// }else if(19 > age && age > 16 ){
//     console.log(`고딩`)
// }else if(age <= 16 && age > 13){
// }

// 1. 하나의 정수를 입력 받고, 양수, 음수, 0인지 확인하기

// const num = parseInt(window.prompt(`숫자를 입력하시오`));

// if (num > 0) {
//   console.log(`${num} 은 양수`);
// } else if (num < 0) {
//   console.log(`${num} 은 음의 정수`);
// } else {
//   console.log(`${num} 은 숫자 0`);
// }

// 2. 수학 점수를 입력받고 90점 이상 'A', 80점 이상 'B', 70 'C' , 그게 아니면 D

// const score = parseInt(window.prompt(`점수는 몇점?`));

// if (score > 90) {
//   console.log(`A`);
// } else if (score > 80) {
//   console.log(`B`);
// } else if (score > 70) {
//   console.log(`C`);
// } else {
//   console.log(`D`);
// }

//  3. 숫자 입력, 양의 홀수, 양의 짝수, 음의 홀수, 음의 짝수, 0?
// num % 2 === 1 // 홀수
// num % 2 === 0 // 짝수

// const num = Number(window.prompt('숫자 입력'));

// const isPositive = num > 0;
// const isNegative = num < 0;
// const isOdd = num % 2 === 1;
// const isEven = num % 2 === 0;

// if (isPositive && isOdd) {
//   console.log(`양의 홀수`);
// } else if (isPositive && isEven) {
//   console.log(`양의 짝수`);
// } else if (isNegative && isOdd) {
//   console.log(`음의 홀수`);
// } else if (isNegative && isEven) {
//   console.log(`음의 짝수`);
// } else {
//   console.log(`zero`);
// }

// const age = 10;
// if (age > 7) {
//   if (age > 13) {
//     console.log('청소년');
//     console.log('유소년');
//   }
// }

// switch
const season = '봄';

switch (season) {
  case '봄': {
    console('날이 좋네요');
    break;
  }
  case '여름': {
    console('날이 더워요');
    break;
  }
  case '가을': {
    console('날이 쌀쌀');
    break;
  }
  case '겨울': {
    console('날이 추움');
    break;
  }
}
