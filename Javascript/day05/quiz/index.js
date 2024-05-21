// document.querySelector('.coffeeInput');

const menu = [];
//메뉴를 넣고 제출 버튼누르면
const menuInput = document.querySelector('.menuInput');
const submit = document.querySelector('.submit');

submit.addEventListener('click', () => {
  const mv = menuInput.value;

  const isAddedMenu = document.querySelector('.menu');

  const divTag = document.createElement('div');
  divTag.innerText = `메뉴 : ${mv}`;

  isAddedMenu.appendChild(divTag);
});

// menu에 글이 누적되면서 추가됩니다.
