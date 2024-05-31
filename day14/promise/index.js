// promise
// 비동기 작업이 맞이할 미래의 완료 또는 실패와 그 결과값을 나타내는 객체
// ing, 성공, 실패    <= promise는 세개의 결과값을 나타낸다
// pending, fullfilled, rejected
const a = new Promise((succeed, failed) => {
  setTimeout(() => {
    succeed('happy js');
  }, 3000);
});

//  .then <= 은 성공할 때 결과    
//  .catch   <= 는 실패할 때 결과

a.then((x) => {
  console.log(x);
});

const b = fetch('')
const c = b.then((x)=>x.json()).then((y)=>console(y))