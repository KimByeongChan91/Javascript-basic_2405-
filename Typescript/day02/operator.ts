//union[=or] |

const user: string | number = '1';
const isLogin: boolean | null = false;
const box: Element | null = document.querySelector('.box');

//아래 두 개 같음
const newDiv: Element = document.createElement('div');
const newDiv1: HTMLDivElement = document.createElement('div');

// object
//커피 -> {name,price,shot} or {name,price,kcal}
const coffee:
  | { name: string; price: number; shot: number }
  | { name: string; price: number; kcal: number } = {
  name: '아아',
  price: 2000,
  shot: 3,
};

//inersection[=and] &
//never: 있을수가 없음
//unknown: 몰루
// const b: string & number = 1  <- never타입
//() => type: 함수 지정 타입

// Solid 원칙 => d: 저수준 모듈 => 고수준 모듈 만드셈
// ex: [타이어,엔진,벨트,시트] => 자동차
const person: { name: string } & { age: number } & { eat: () => void } = {
  name: '김타입',
  age: 21,
  eat: () => {
    console.log('밥꿀맛');
  },
};
