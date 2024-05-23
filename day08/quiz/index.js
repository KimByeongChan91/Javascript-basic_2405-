// 1.
// 정수 n과 k가 주어졌을 떄, 1 이상 n 이하의 정수 중에서 k의 배수를
// 오름차순으로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.

// n k result
// 10 3 [3, 6, 9]
//15 5 [5, 10 15]

const MakeArr = (n, k) =>
  Array(n)
    .fill(1)
    .map((v, i) => i + 1)
    .filter((v) => v % k == 0);

// strArr result
// ["and", "notad","abcd"] ["and","abcd"]
// ["there", "are", "no", "a", "ds"], ["there", "are", "no", "a", "da"]

const strArr = ['and', 'notad', 'abcd', 'there', 'are', 'no', 'a', 'ds'];

const result = arr1
  .includes((v) => {
    'a', 'd';
  })
  .filter(v);

console.log(result);

['and', 'notad', 'abcd'].filter((v) => !v.includes('ad'));

const makeStr = (strArr) => strArr.filter((v) => !v.includes('ad'));
console.log(makeStr);
