import { dagymDatas } from './dagymdata.js';

const main = document.querySelector('.main');

dagymDatas.result.centerList.forEach((v) => {
  main.insertAdjacentHTML(
    'beforeend',
    `
    <div class="container">
    <div class="topContents">
      <div class="imgBox">
        <img src="${v.gymPhotoSmall}" alt="">
      </div>
      <div class="description">
        <div class="description_top">
          <div class="heartButton"><i class="fa-regular fa-heart"></i></div>
          <div class="description_1">
            <div class="description_1_Category">${v.tags}</div>
            <div class="description_1_Name">${v.gymName}</div>
            <div class="description_1_Review">
            <span class="rate">★${v.review.rate}</span>
            <span class="count">(${v.review.count})</span>
            <span class="address">${v.address}</span>
              </div>
          </div>
        </div>
        <div class="description_Bottom">
          <div class="productIcon">
          </div>
          <div class="price">
            <div class="originalPrice"></div>
            <div class="discountPrice">
              <div class="discountPrice_rate"></div>
              <div class="discountPrice_price">
                <div class="discountPrice_price_Price"></div>
                <div class="discountPrice_price_month"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottomContents">
      <div class="freeProgram"></div>
      <div class="freeService"></div>
    </div>
  </div>
    `
  );
});
