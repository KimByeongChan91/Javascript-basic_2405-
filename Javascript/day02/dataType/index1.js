// 데이터 타입: 기본 + 참조
// 기본: String[문자], Number[숫자]

// const a = window.prompt("숫자 입력");
// 문자 -> 숫자 타입 바꾸기
// 1. Number
// const b = Number(a);
// console.log(b + 10);

// // 2. parseInt(), parseFloat() 문자 타입만 넣었을때 유효
// const c = parseInt(a)
// console.log(c + 20)
// +, -, *

// 덧셈 뺄셈 곱셈

// const firstNum = window.prompt("첫 번째 숫자:");
// const firstNumParse = Number(firstNum);

// const secondNum = window.prompt("두 번째 숫자:");
// const secondNumParse = Number(secondNum);

// const numResultDiv = document.createElement(`div`);

// numResultDiv.innerText = `합: ${firstNumParse + secondNumParse} 차: ${
//   firstNumParse - secondNumParse
// } 곱: ${firstNumParse * secondNumParse}`;
// document.body.appendChild(numResultDiv);

// 나이 입력하면 출생년도로 변환

// const age = Number(window.prompt("나이?"));
// const yearDiv = document.createElement(`div`);
// yearDiv.innerText = `${2025 - age}"년 생 이시군요"`;

// document.body.appendChild(yearDiv);

const side = Number(window.prompt("정사각형 한 변의 길이: "));
const squarDiv = document.createElement;
