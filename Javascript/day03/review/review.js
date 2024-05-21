// input: window.prompt
// output: html

// 1번문제 : 유저에게 밑변과 높이를 입력을 받고 정삼각형의 넓이 나타내기

const a = Number(window.prompt(`밑변?`));

const b = Number(window.prompt(`높이?`));

const c = document.createElement(`div`);

c.innerText = `정삼각형 넓이 : ${a * b * 0.5}`;

document.body.appendChild(c);

// 2번문제 : 한국 돈 원을 입력하면 엔화로 바꿔주기

const kor = window.prompt(`한국 돈 얼마?`);

const jap = document.createElement(`div`);

jap.innerText = `엔화 가치는 ${parseFloat(kor * 0.11)}`;

document.body.appendChild(jap);
