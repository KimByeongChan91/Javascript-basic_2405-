//1. 제일 작은 수 제거하기
const solution = (arr: number[]) => {
  if (arr.length == 1) {
    return [-1];
  }
  const min = arr.sort()[0];
  const newArr = arr.filter((v) => v != min);
  return newArr;
};

// 이렇게도 가능
// const solution = (arr:number[])=>{

//     arr.length == 1 ? [-1] : arr.filter((v)=>v != arr.sort()[0])
// }
