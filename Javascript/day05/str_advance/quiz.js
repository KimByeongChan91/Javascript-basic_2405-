const fruits = ['strawberry', 'orange', 'apple', 'banana', 'melon', 'durian'];

//콘솔로그로 결과 나타내기
// 1. a가 포함되어 있으면 대문자화 시키고, 아니면 :imo 이모티콘 출력하기

fruits.forEach((v) => {
  if (v.includes('a') == true) {
    console.log(v.toUpperCase());
  } else {
    console.log('🎈');
  }
});

// 삼항연산자로 할 경우
// fruits.forEach((v)=>{
//     console.log(v.includes("a") ? v.toUpperCase() : "🎈")
// })

// 2. b가 포함되어 있으면 b기준으로 단어를 쪼개서 배열화 하고, 아니면  이모티콘 출력하기

fruits.forEach((v) => {
  console.log(v.includes('b') ? v.split('b') : '🎈');
});

// fruits.forEach((v) => {
//   if (v.includes(b) == true) {
//     v.split('b');
//     const first = a[1]
//     const last =
//   } else {
//     console.log('🎈');
//   }
// });

// 3. n이 포함되어 있으면 기존에 있던 단어들을 결합해서 최종 단어 보여주기

let a = '';
fruits.forEach((v) => {
  if (v.includes('n')) {
    a += v;
  }
  console.log(a);
});

// 4. 문자의 길이가 6글자 이상이면 알파벳 a를 k로 바꿔서 출력하고, 아니면 대문자화 해서 출력하기

fruits.forEach((v) => {
  console.log(v.length >= 6 ? v.replace('a', 'k') : v.toUpperCase());
});
