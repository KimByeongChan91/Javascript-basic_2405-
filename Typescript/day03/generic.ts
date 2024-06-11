//generic:generalize -> 입구컷   너가 타입을 지정해주세요.

type Fruit_ = {
  name: string;
  kcal: number;
};

// 방법 1
function getSomething<T>(something: T) {
  console.log(`${something}을 얻었습니다.`);
}
getSomething<string>('사과');
getSomething<number>(1000);
getSomething<boolean>(true);

getSomething<string | number>('');

// 방법 2
const getSomething1 = <T>(something: T) => {
  console.log(`${something}을 얻었습니다.`);
};

getSomething1<string>('돈까스');

const getSomethingNumber = (something: number) => {
  console.log(`${something}을 얻었습니다.`);
};

const getSomethingString = (something: string) => {
  console.log(`${something}을 얻었습니다.`);
};

const getSomethingBoolean = (something: boolean) => {
  console.log(`${something}을 얻었습니다.`);
};
