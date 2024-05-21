console.log("자바스크립트! 시작!");
// console.log("자바스크립트 공부 다짐: 잘하고 싶다ㅠ");
// console.log("오늘 점심 메뉴: 토스트");

// window.alert("경고");

// window.confirm("Yes or No");

// window.prompt("왜안나옴?");

// window.open("https://www.naver.com/");

// const a = document.createElement("div");
// a.innerText = "아메리카노";
// a.addEventListener("mouseover", () => {
//   window.alert("메가 커피 짱짱");
// });

// document.body.appendChild(a);

// 화면에 버튼 태그를 만들고
// 안의 내용은 석가탄신일
// 클릭을 하면 alert로 부처님 오심 ㄹㅇ

// const b = document.createElement("button");
// b.innerText = "석가탄신일";
// b.addEventListener("click", () => {
//   window.alert("레알 부천님이 오셨다");
// });

// 'document'야 'body'에서 'appendChild(b)' 를 달아줘
// document.body.appendChild(b);

// 버튼 태그 만들고, 안에 아메리카노
// 클릭을 하면, 라떼로 바뀌게

// const c = document.createElement("button");
// c.innerText = "아메리카노";
// c.addEventListener("click", () => {
//   c.innerText = "라떼";
// });

// document.body.appendChild(c);

// const b = window.prompt("물어보세요");
// console.log(b);

//  첫번째 prompt 버튼 전의 이름
//  두번째 prompt 버튼 클릭 후 이름
// 클릭전 이름 버튼 만들고, 클릭하면 두번째 클릭 이름으로 바뀜

// const a = window.prompt("첫번째 질문");
// const b = window.prompt("두번째 질문");

// const c = document.createElement("button");
// c.innerText = a;
// c.addEventListener("click", () => {
//   c.innerText = b;
// });

// document.body.appendChild(c);

// const a = document.createElement("button");

// a.innerText = "button";
// a.style.backgroundColor = "red";
// document.body.appendChild(a);

// button 태그 만들고, 배경색 하늘색, 폰트사이즈 20px,
// 클릭을 하면 빨간색으로 바뀌는 퀴즈

// const a = document.createElement("button");

// a.innerText = "버튼";
// a.style.backgroundColor = "skyblue";
// a.style.fontSize = "15px";

// a.addEventListener("click", () => {
//   a.style.backgroundColor = "red";
//   a.style.fontSize = "20px";
// });

// document.body.appendChild(a);

// innerText & innerHTML 차이

// const a = document.createElement("div");
// a.innerText = "<button>코리아아이티</button>";
// a.innerHTML = "<button>코리아아이티</button>";
// document.body.appendChild(a);

// 버튼이 5개 있음, 빨 주 노 초 파
// 모두 css를 배경색은 각각 해당 색으로 바꾸고, text는  빨,주,노,초,파
// div태그가 w:100 h:100 border:1px solid black 있는데
// 여기서 위의 5개의 버튼중 하나를 누르면 div의 배경색이 해당 색으로 바뀌는 프로그램

const a = document.createElement("button");

a.innerText = "Red";
a.style.backgroundColor = "Red";

const b = document.createElement("button");

b.innerText = "orange";
b.style.backgroundColor = "orange";

const c = document.createElement("button");

c.innerText = "Yellow";
c.style.backgroundColor = "yellow";

const d = document.createElement("button");

d.innerText = "Green";
d.style.backgroundColor = "green";

const e = document.createElement("button");

e.innerText = "blue";
e.style.backgroundColor = "blue";

const f = document.createElement("div");

f.style.width = "100px";
f.style.height = "100px";
f.style.border = "1px solid black";

a.addEventListener("click", () => {
  f.style.backgroundColor = "red";
});

b.addEventListener("click", () => {
  f.style.backgroundColor = "orange";
});

c.addEventListener("click", () => {
  f.style.backgroundColor = "Yellow";
});

d.addEventListener("click", () => {
  f.style.backgroundColor = "green";
});

e.addEventListener("click", () => {
  f.style.backgroundColor = "blue";
});

document.body.appendChild(a);
document.body.appendChild(b);
document.body.appendChild(c);
document.body.appendChild(d);
document.body.appendChild(e);
document.body.appendChild(f);
