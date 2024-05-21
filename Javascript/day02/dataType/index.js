// const favorite1 = window.prompt("당신이 좋아하는 커피는");
// const favorite2 = window.prompt("당신이 좋아하는 빵은");
// console.log(
//   "당신이 좋아하는 커피는" +
//     favorite1 +
//     "이고 당신이 좋아하는 빵은" +
//     favorite2 +
//     "이군요"
// );
// console.log(
//   `당신이 좋아하는 커피는 ${favorite1} 이고 당신이 좋아하는 빵은 ${favorite2} 이군요`
// );

// const a = "coffee";
// const b = "bread";
// const c = `latte`;

// 1. 자기 소개 프로그램

// const introduceName = window.prompt("당신의 이름은?");
// const introduceAge = window.prompt("당신의 나이는?");
// const introduceHobby = window.prompt("당신의 취미는?");
// console.log(
//   `당신의 이름은 ${introduceName} 이고 나이는 ${introduceAge} 이며 취미는 ${introduceHobby} 군요`
// );

// 2. 일정 프로그램

// const todayDate = window.prompt("오늘의 날짜는?");
// const todayPlan = window.prompt("오늘의 계획은?");

// console.log(
//   `오늘의 날짜는 ${todayDate} 이고 오늘의 계획은 ${todayPlan} 이군요!`
// );

// 3. 버튼 만들기

// const buttonText = window.prompt("버튼 내용 입력");
// const button = document.createElement("button");
// button.innerText = `입력한 내용 : ${buttonText}`;

// document.body.appendChild(button);

// 유저에게 세번의 prompt로 헥사코드 색깔을 입력 받고
// 버튼 3개를 만들고 (text: 헥사코드, bg: 헥사코드)
// 박스 하나 만들고(w:100, h:100, bg: 선택된 버튼의 헥사코드, text: 입력된 헥사코드: [])

const first = window.prompt("색깔을 입력하시요1");
const second = window.prompt("색깔을 입력하시요2");
const third = window.prompt("색깔을 입력하시요3");

const buttonFirst = document.createElement("button");
const buttonSecond = document.createElement("button");
const buttonThird = document.createElement("button");

const box = document.createElement("div");

buttonFirst.style.backgroundColor = first;
buttonSecond.style.backgroundColor = second;
buttonThird.style.backgroundColor = third;

buttonFirst.innerText = first;
buttonSecond.innerText = second;
buttonThird.innerText = third;

box.style.width = "100px";
box.style.height = "100px";
box.style.border = "1px solid";
box.innerText = "선택된 색상 없음";

buttonFirst.addEventListener("click", () => {
  box.style.backgroundColor = first;
  box.innerText = `선택된 색상: ${first}`;
});

buttonSecond.addEventListener("click", () => {
  box.style.backgroundColor = second;
  box.innerText = `선택된 색상: ${second}`;
});

buttonThird.addEventListener("click", () => {
  box.style.backgroundColor = third;
  box.innerText = `선택된 색상: ${third}`;
});

document.body.appendChild(buttonFirst);
document.body.appendChild(buttonSecond);
document.body.appendChild(buttonThird);
document.body.appendChild(box);
