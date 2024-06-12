const getSomething2 = <T>(something: T) => {
  return `${something}을 얻었습니다.`;
};

type Pair<T, U> = {
  first: T;
  second: U;
};

const test1: Pair<String, boolean> = {
  first: '치킨',
  second: false,
};

type Coffee1 = {
  name: string;
  price: number;
};

type Cookie = {
  name: string;
  price: number;
};

const subwayMorningSet: Pair<Coffee1, Cookie> = {
  first: {
    name: '아메',
    price: 1500,
  },
  second: {
    name: '쿠키',
    price: 1000,
  },
};

//quiz
// Triple타입 만들고, Hamburger, Side, Drink 타입 만들기

type Triple<T, U, V> = {
  first: T;
  second: U;
  third: V;
};

type Hamburger = {
  name: string;
  price: number;
};

type Side = {
  name: string;
  price: number;
};

type Drink = {
  name: string;
  price: number;
  hascaffein: boolean;
};

const bigmac: Triple<Hamburger, Side, Drink> = {
  first: {
    name: '불고기버거',
    price: 3000,
  },
  second: {
    name: '감자튀김',
    price: 1500,
  },
  third: {
    name: '콜라',
    price: 1000,
    hascaffein: false,
  },
};

type Success<T> = {
  type: 'success';
  value: T;
};

type Fail1 = {
  type: 'fail';
  value: string;
};

type Response__<T> = Success<T> | Fail1;

const getResponse_ = (res: Response__<string[]>) => {
  if (res.type == 'success') {
    res.value.forEach((v) => console.log(v));
  } else {
    console.log(res.value.toUpperCase());
  }
};

getResponse_({ type: 'success', value: ['자바', '파이선', '코틀린'] });
getResponse_({ type: 'fail', value: '실패하였습니다.' });

type Won = `${string}원`;
type Yen = `${string}엔`
type Dollar = `${string}달러`

const shampoo: Won | Yen= `1000원`

type GuestName = `${string}님`

const choi: GuestName = `최님`