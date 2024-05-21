// const input = document.querySelector('.input');
// const checkBtn = document.querySelector('.check');
// const msg = document.createElement('div');
// document.body.appendChild(msg);

// console.log(input.value);

//input을 입력하고 확인 버튼을 눌렀을 때,
//8글자 이하이면 글자수가 짧습니다[빨간색] 나오고
//아니면 글자수가 충분합니다[파란색] 나오기

// const a = document.createElement('button')

// a.addEventListener("click",() =>{
//     input.value.length()
//     text >= 8 ? console.log("글자수 충분") : con("글자 수 짧음")
// })

// document.body.appendChild(a)

// checkBtn.addEventListener('click', () => {
//   if (input.value.length <= 8) {
//     msg.innerText = '글자수가 짧습니다.';
//     msg.style.color = `red`;
//   } else {
//     msg.innerText = '글자수 충분';
//     msg.style.color = 'blue';
//   }
// });

// document.body.appendChild(checkBtn);

// 8~20글자 사이이고, 반드시 !,#,$를 하나라도 포함해야하고,
// 글자 시작을 'IT' 하면, 올바르게 문자를 설정했습니다.
// 아니면 문자를 다시 설정하세요[빨강]

// 내가한것
// checkBtn.addEventListener('click', () => {
//   if (input.value.length >= 8 && input.value.length <= 20 && input.) {
//     msg.innerText = '올바르게 문자를 설정했습니다';
//     msg.innerText = 'blue';
//   } else {
//     msg.innerText = '문자를 다시 설정하세요';
//     msg.style.color = 'red';
//   }

//   document.body.appendChild(checkBtn);
// });

// 8~20글자 사이이고, 아니면 8~20글자 사이로 글자를 만들어 주세요!
//  반드시 !,#,$를 하나라도 포함해야하고, 아니면 반드시 !,#,$이 포함되어야 해요!
// 글자 시작을 'IT' 하면, 아니면 반드시 IT로 시작해야 해요!
// 아니면 문자를 다시 설정하세요[빨강]

// 강사님
const input = document.querySelector('.input');
const checkBtn = document.querySelector('.check');
const msg = document.querySelector('.msg');

checkBtn.addEventListener('click', () => {
  const value = input.value; //눌렀을 때, input value 가져오기
  const isValidLength = 8 <= value.length && value.length <= 20;
  const isValidSpecialChar =
    value.includes('!') || value.includes('#') || value.includes('$');
  const isValidStart = value.startsWith('IT');
  const isValid = isValidLength && isValidSpecialChar && isValidStart;

  msg.style.color = 'red';

  if (isValidLength != true) {
    msg.innerText = '8~20글자 사이로 글자를 만들어 주세요!';
  } else if (isValidSpecialChar != true) {
    msg.innerText = '반드시 !,#,$이 포함되어야 해요!';
  } else if (isValidStart != true) {
    msg.innerText = '반드시 IT로 시작해야 해요!';
  } else if (isValid == true) {
    msg.innerText = '올바르게 문자를 설정했습니다.';
    msg.style.color = 'blue';
  }

  //   if (isValid) {
  //     msg.innerText = '올바르게 문자를 설정했습니다.';
  //     msg.style.color = 'blue';
  //   } else {
  //     msg.innerText = '문자를 다시 설정하세요.';
  //     msg.style.color = 'red';
  //   }
});
