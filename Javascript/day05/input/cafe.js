//  커피 input
// 가격 input - 숫자여야만하고 [1000 이상부터 가능]
// - 1000원 이상 입력 해야 합니다.
// 수량 input - 숫자여야만 하지만 [1~10000 가능]
// -1~10000개수 여야 합니다.

// 제출하기 button
// 3개 글자가 0이 아니여야 제출이 가능

// 커피 재고 리스트
// 아메리카노 3000원 1000개

// 맨 밑에 총 갯수 : 13000개

const coffee = document.querySelector('.coffee');
const price = document.querySelector('.price');
const count = document.querySelector('.count');
const msg = document.querySelector('.msg');
const sum = document.querySelector('.sum');

msg.addEventListener('click', () => {
  const priceValue = price.value;
  const validPrice = 1000 <= price.value;

  const countValue = count.value;
  const validCount = 1 <= count.value && count.value <= 10000;

  sum.style.border = '1px solid';
  sum.innerText = '아직 입력안함';

  const isValid = validPrice != 0 && validCount != 0;

  if (!priceValue) {
    sum.innerText = '1000원 이상 입력 해야 합니다.';
  } else if (!validCount) {
    sum.innerText = '개수는 1~10000 이여야 합니다.';
  } else if (!isValid) {
    sum.innerText = '3개 글자가 0이 아니여야 제출이 가능';
  } else {
    sum.innerText = countValue * priceValue;
  }
});

// if(!priceValue){
//     msg.innerText = "1000원 이상 입력 해야 합니다."
// }else if(!countValue){
//     msg.innerText ="개수는 1~10000 이여야 합니다."
// }
