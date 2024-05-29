const users = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 20 },
  { id: 3, name: 'Charlie', age: 35 },
];

// 계속 타입을 신경써서 봐라

const kim = { name: '김민재', age: 27, position: 'center back' };
const { name: koreaName, position: soccerPosition } = kim; // renaming

const koreaDefender = {
  koreaName: koreaName, // 키값 : 밸류값
  soccerPosition: soccerPosition,
};

// 위처럼 키값, 밸류값이 같으면 아래처럼 밸류값을 생략할 수 있음
// const koreaDefender = {
//     koreaName,   // 키값 : 밸류값
//     soccerPosition
//   };

console.log(koreaName, soccerPosition);

//1. renaming
const renamedusers = users.map(({ id: userId, name: userName, age: userAge }) => {
  userId, userName, userAge;
});

console