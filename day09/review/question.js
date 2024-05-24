//1. if문 사용법

//3. 이중 foreach(v,i)
// -> 뭔가 비슷한 패턴이 들어간다? 뭔가가 반복되고 있다? -> 그럼 바로 반복문 foreach 쓰면됨

//4. e.target.value input.value 안쓰고 왜 ?
// -> 1. input.value  - 하나하나 가져와서
// -> 2. e.target.value -

//5. map,filter
// ->

//6. [{}{}] foreach, object
// -> object에는 foreach 없음. 못씀.
// -> array에는 foreach 가능

// [
//   {
//     name: 'kim',
//     age: 20,
//   },
//   {
//     name: 'lee',
//     age: 22,
//   },
//   {
//     name: 'park',
//     age: 25,
//   },
// ].map((v, i) => {
//   v.age = v.age + 10;
//   return v;
// });

//2. 로직을 어떻게 응용할지 떠오르지 않음//코드 흐름 어려움

// -> 코수들이 짜놓은 코드를 리뷰
// -> 모르는 부분 책보기
// -> 한가지 일을 잘하는 메서드를 만들기

// 1. 커피 메뉴 고르기
// 아메리카노, 라떼
//3000원    4000원
// 추가하기
// 총액: 0원에서 올라감
