import { backendData } from './data.js';

// 1. id, currency, money, phone만 콘솔로
// 2. animalName => {animal, car:{make,year,model}} 콘솔로
// 3. ipaddress가 맨 마지막 세자리가 합이 10 이하이면, id, color만 콘솔로 찍기
// 4. timezone이 알파벳 모음으로 시작하면, {timezone,carmake,phone앞 세자리만 가져오기}
// 5. money가 50000엔 이하이면, phone[하이픈 제거]과 appName[대문자화하고] 가져오기

// 1.
// backendData.forEach((v) => {
//   console.log(v.id, v.currency, v.money, v.phone);
// });

// 2.
// backendData.forEach((v)=>{
//     const {animalName:animal {carMake:v.carMake, carModel: v.carModel, carModelYear:v.carModelYear}} = backendData
// })

// 3.
backendData.forEach((v, i) => {
  const a = v.ipAddress.split([7]);
  const arr1 = a[0];
  const arr2 = a[1];
  console.log(arr1);
  console.log(arr2);
});

// 4.
backendData.forEach((v)=>{
    v.timezone.startsWith('a','e','i','o','u') ? v.timezone.split
})
