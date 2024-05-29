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

const one = backendData.map(({id, currency, money, phone})=>({
    id,
    currency,
    money,
    phone,
}))

// 2. animalName => {animal, car:{make,year,model}} 콘솔로
const two = backendData.map(({animalName:animal, carMake:make, carModel:model,carModelYear: year})=>({
    animal,
    car:{make,model,year}
}))

// 3. ipaddress가 맨 마지막 세자리가 합이 10 이하이면, id, color만 콘솔로 찍기
const c = backendData.filter

// 4.timezone이 알파벳 모음으로 시작하면, {timezone,carmake,phone앞 세자리만 가져오기}
backendData.map(({timezone,carMake,phone})=>({
    timezone,
    carMake,
    phone: phone.split("-")[0],
}))

// 5. money가 50000엔 이하이면, phone[하이픈 제거]과 appName[대문자화하고] 가져오기
const e = backendData.filter(({money})=>money <= 50000).map(({money,phone,appName})=>({
    money,
    phone: phone.replaceAll("-",""),
    appName: appName.toUpperCase()
}))