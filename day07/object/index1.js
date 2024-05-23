//유튜버
const youtubers = [
  {
    name: '슈카월드',
    subscribers: 3000000,
    genre: ['economics', 'entertainment'],
  },
  {
    name: '침투부',
    subscribers: 1200000,
    genre: ['game', 'life', 'entertainment'],
  },
  {
    name: '곽튜브',
    subscribers: 1500000,
    genre: ['journey', 'entertainment'],
  },
];

//콘솔로그로 각각 나타나게

// youtubers.forEach((v, i) => {
//   console.log(`${i + 1}.유튜버: ${v.name}`);
//   console.log(`장르: ${v.genre}`);
//   console.log(`구독자수: ${v.subscribers}`);
// });

// youtubers.filter(() => v.subscribers <= 2000000).forEach((v) => v.genre);

// youtubers.forEach((v, i) => {
//   console.log(`${i + 1}.장르: ${v.genre}`);
// });

//장르는 대문자, 구독자는 만 단위로

// youtubers
//   .map((v) => {
//     v.subscribers = v.subscribers / 10000;
//     v.genre = v.genre.map((v) => v.toUpperCase());
//     return v;
//   })
//   .forEach((v) => console.log(v));
