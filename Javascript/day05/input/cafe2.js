const coffeeInput = document.querySelector('.coffeeInput');
const priceInput = document.querySelector('.priceInput');
const amountInput = document.querySelector('.amountInput');
const submit = document.querySelector('.submit');
const warnMsg = document.querySelector('.warnMsg');
const coffeeList = document.querySelector('.coffeeList');

submit.addEventListener('click', () => {
  const cv = coffeeInput.value;
  const pv = priceInput.value;
  const av = amountInput.value;

  const isValidEmpty = !!cv.length && !!pv.length && !!av.length;
  const isValidPrice = 1000 <= Number(pv);
  const isValidAmount = 1 <= Number(av) && Number(av) <= 10000;
  warnMsg.style.color = 'red';
  if (!isValidEmpty) warnMsg.innerText = '빈칸을 모두 기입해주세요!';
  else if (!isValidPrice) warnMsg.innerText = ' 가격에 1000원 이상';
  else if (!isValidAmount) warnMsg.innerText = '수량에 1~10000 개수';
  else {
    warnMsg.style.color = 'black';
    const coffeeListDiv = document.querySelector('.coffeeList');
    const divTag = document.createElement('div');

    divTag.innerText = `커피종류: ${cv} , 가격: ${pv}, 수량: ${av}`;
    coffeeListDiv.appendChild(divTag);
  }
});

//못한 부분 마무리하기@@@@
