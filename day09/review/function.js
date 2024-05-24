// 함수는 [동사, 액선, 행동]
// .기능 에 동사가 있으면 ()에 넣어주고 , 동사가 없다면 = ""
// const div = document.createElement('div')
// div.appendChild('box')
// div.innerText = "내용"

// f(g(x)) [합성함수]
// addEventListener('click',()=>{})
// map(()=>{})

function x100(x) {
  return x + 100;
}

x100(1); // number type
x100('123'); // string type
x100(true); // boolean
x100([1, 2, 3, 4, 5]); // array
x100(() => {}); // function
