// 참조타입:
// 프로그래밍 타입) Array, Object, Function
// Html에서 가져온 타입) Element, Event

// const input = document.querySelector('.input');
// input.addEventListener('input', (e) => {
//   console.log(e.target.value);
// });

// 글자가 열 글자 이상 넘어가면 빨간색으로

const input1 = document.querySelector('.input1');
input1.addEventListener('input', (e) => {
  const result =
    e.target.value.length > 10
      ? (input1.style.color = 'red')
      : (input1.style.color = 'black');
  console.log(result);
});

// 열글자 이상 안쳐지게

const input2 = document.querySelector('.input2');
input2.addEventListener('input', (e) => {
  e.target.value =
    e.target.value.length > 10 ? e.target.value.slice(0, 10) : e.target.value;
});

// 이메일 : 네이버,다음,지메일,카카오 만 됨, @ 포함되어야 됨
// 패스워드 : 8글자 이상이고 특수문자 하나라도 포함
// 패스워드 확인칸 :
// 패스워드 확인칸 까지 동일하면 로그인 버튼 바뀌게
