//동기 프로그래밍
// console.log(1);
//비동기 프로그래밍 [데이터 가져오기, 지도위치 가져오기, 시간초재기]
// setTimeout(() => {
//   console.log(2);
// }, 1000);
// setInterval(() => {
//   console.log('오늘은 목요일');
// }, 1000);

// 숫자 타이머로 1~10까지 바뀌는 프로그램

setInterval(() => {
  const count = document.querySelector('.count');
  count.innerText = Number(count.innerText) + 1;
}, 1000);

//String,Number,Boolean,Array,Element,

// 1. 지금 몇년 몇월 몇일 무슨요일인지 html에 나타내기

// console.log(
//   ` 현재: ${moonLanding.getFullYear()}년,${moonLanding.getMonth()}월,${moonLanding.getDate()}일,${moonLanding.getDay(
//     changeGetDay
//   )}`
// );

setInterval(() => {
  const moonLanding = new Date();
  const day = document.querySelector('.day');

  const koreaDay = {
    1: '월요일',
    2: '화요일',
    3: '수요일',
    4: '목요일',
    5: '금요일',
    6: '토요일',
    7: '일요일',
  };

  day.innerText = `${moonLanding.toLocaleString()} ${
    koreaDay[moonLanding.getDay()]
  }`;
}, 1000);


