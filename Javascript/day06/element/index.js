// js : html 생성하고, css도 만들고, 기능을 넣었음

// 기본타입 : string, number, boolean, null, undefined
// 참조타입 : Array, element

// const divTag = document.createElement('div');

// divTag.appendChild() 자식에 태그 추가하기
// divTag.removeChild() 자식에 해당 태그 지우기

// divTag.style    직접 css 관여
// divTag.classList 클래스 리스트 보기
// divTag.classList.add("red") 클래스 리스트에 red 추가
// divTag.classList.remove("red") 클래스 리스트에 red 삭제
// divTag.classList.toggle('red') 클래스 리스트에 red가 있으면 삭제, 없으면 추가
// const divTag1 = document.querySelector('.box');

// divTag1.style.color = 'red';

//늘리기 버튼을 눌르면 200으로 바뀌고 줄이기로 바뀜.
//처음에 블루였다가 빨간색을 누르면 빨간색으로 바뀌고,
//다시 파란색을 누르면 빨간색으로

const box = document.querySelector('.box');
const sizeBtn = document.querySelector('.sizeBtn');
const colorBtn = document.querySelector('.colorBtn');
const radiusBtn = document.querySelector('.radiusBtn');

sizeBtn.addEventListener('click', () => {
  sizeBtn.innerText = sizeBtn.innerText == '늘리기' ? '줄이기' : '늘리기';

  box.classList.toggle('medium');
  box.classList.toggle('large');
});

colorBtn.addEventListener('click', () => {
  colorBtn.innerText = colorBtn.innerText == '빨간색' ? '파란색' : '빨간색';
  box.classList.toggle('red');
  box.classList.toggle('blue');
});

//테두리가 직각이냐? 둥그스름하냐?

radiusBtn.addEventListener('click', () => {
  radiusBtn.innerText =
    radiusBtn.innerText == '테두리 직각' ? '테두리 둥글게' : '테두리 직각';
  box.classList.toggle('borderRadiusZero');
  box.classList.toggle('borderRadiusRound');
});
