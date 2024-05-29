import { datas } from './data.js';

const main = document.querySelector('.main');

// titleImage, id,hospitalName, subwayname, title, rating, cost,

const costToThree = (cost) => {
  return [...String(cost)].map((v, i) => (i > 2 ? '' : v)).join('');
};

// 이 부분 확인해보기
const discountCost = (cost) => {
  cost.map((v) =>
    v.discountRate == 0 ? v.style.display('none') : v.style.display('block')
  );
};

datas.forEach((v) => {
  main.insertAdjacentHTML(
    'beforeend',
    `
    <div class="container">
        <div class="titleImage">
            <img src="${v.titleImage}" alt style="">
        </div>
        <div class="description">
            <div class="id">${v.id}</div>
            <div class="hospitalSubwayName">${v.hospitalSubway}.${
      v.hospitalName
    }</div>
            <div class="title">${v.title}</div>
            <div class="rating">★${v.rating} (${v.ratingCount})</div>
            <div class="cost">${costToThree(v.cost)}만원 (${discountCost(
      v.discountRate
    )})</div>
        </div>
    </div>
        `
  );
});
