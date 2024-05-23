// const buttonClassList = [
//   {
//     btnName: '.btn1',
//     func: 'email',
//     msg: '네이버, 다음, 지메일, 카카오만 가능',
//   },
//   {
//     btnName: '.btn2',
//     func: 'createPw',
//     msg: '8글자 이상이고 특수문자 하나 이상 입력',
//   },
//   {
//     btnName: '.btn3',
//     func: 'confirmPw',
//     msg: '패스워드 반복',
//   },
// ];

// buttonClassList.forEach((v, i) => {
//   const newDiv = document.createElement('div');
//   const newInput = document.createElement('input');

//   newDiv.innerText = v.func;
//   newDiv.classList.add(v.btnName);
//   newInput.placeholder(v.msg);

//   const btnList = document.querySelector('.btnList');
//   btnList.appendChild(newDiv);
//   btnList.appendChild(newInput);
// });

// const input2 = document.querySelector('.input2');
// input2.addEventListener('input', (e) => {
//   e.target.value =
//     e.target.value.length > 10 ? e.target.value.slice(0, 10) : e.target.value;
// });

// 이메일 : 네이버,다음,지메일,카카오 만 됨, @ 포함되어야 됨
// 패스워드 : 8글자 이상이고 특수문자 하나라도 포함
// 패스워드 확인칸 :
// 패스워드 확인칸 까지 동일하면 로그인 버튼 바뀌게

const emailList = ['naver.com', 'daum.net', 'gmail.com', 'cacao.com'];

const btnList = document.querySelector('.btnList');

const emailInput = document.querySelector('.emailInput');

emailInput.addEventListener('input', (e) => {
  e.target.value = e.target.value.include.target('@')
    ? e.target.value
    : emailInput.value('@ 입력');

  e.target.value = e.target.value.include(emailList)
    ? e.target.value
    : e.value('네이버,다음,지메일,카카오 만 됨');
});

// 패스워드 : 8글자 이상이고 특수문자 하나라도 포함
const pwInput = document.querySelector('.pwInput');

pwInput.addEventListener('input', (e) => {
  const isUpTen = e.target.value > 10;
  e.target.value = isUpTen ? e.target.value : e.target.value('10자 이상 입력');
});

const repeatInput = document.querySelector('.repeatInput');
const login = document.querySelector('.login');
const notPassed = document.querySelector('.notPassed');

// 패스워드 확인칸 까지 동일하면 로그인 버튼 바뀌게
repeatInput.addEventListener('input', (e) => {
  login.classList.add(e.target.value == pwInput.value ? 'passed' : 'notPassed');
  login.classList.remove(
    e.target.value != pwInput.value ? 'passed' : 'notPassed'
  );
});
