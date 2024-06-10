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
