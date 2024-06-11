type Coffee = {
  [key: string]: number;
};

const test: Coffee = {
  name: 1,
  shot: 2,
  kcal: 3,
};

// optional  nation?: string <- 뒤에 ?가 붙으면 null 타입도 가능
type Person = {
  name: string;
  age: number;
  nation?: string;
};

const kim: Person = {
  name: '김씨',
  age: 22,
};

// type Unit = {
//     [key: string]: string | number | null | undefined;
//     name: String;
//     hp: Number;
//     pet?: string;

//   };

type Bread = {
  name: string;
  price: number;
};

type abc = keyof Bread; // 'name' | 'price'
const apple: abc = 'name';






type Menu = '뜨아' | '아아' | '라떼' | '바라';

type Shots = 1 | 2 | 3 | 4

type Coffees = {
  name: Menu[];
  price: number;
  shot: Shots;
};

const cafe: Coffees = {
  name: ['뜨아','라떼'],
  price: 2000,
  shot: 2,
};

const cafe2: Coffees[] = [
  {name: ['뜨아'], price:1500, shot:2},
  {name: ["라떼"], price:2000, shot:3},
  {name: ['바라'], price:3500, shot:2}
]