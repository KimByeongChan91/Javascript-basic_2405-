export const datefunc = setInterval(() => {
  const day = document.querySelector('.day');
  const date = new Date();
  const weeks = {
    1: '월요일',
    2: '화요일',
    3: '수요일',
    4: '목요일',
    5: '금요일',
    6: '토요일',
    7: '일요일',
  };

  day.innerText = `${date.toLocaleString()} ${weeks[date.getDay()]}`;
}, 1000);


// 날짜 배열에 담기

// const todoListData ={}
// const start = new Date()


// Array(365).fill(0),forEach((v,i)=>{
//  const date = start.toISOString().split('T')[0]
//  const pureDate = date.replaceAll("=","")
//   todoListData[pureDate] = []
//   start.setDate(start.getDate() + 1)
// })