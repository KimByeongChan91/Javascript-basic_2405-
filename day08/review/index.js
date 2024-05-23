//기본타입: string, number, null, undefined, boolean ...
//참조타입: array, element, object, function

//기본 타입변환: String()/"", Number()/123, Boolean()/!!
//참조 타입변환: Array()/[], Function()/()=>{}, Object()/{}

//1. [일반 함수] function Name(x,y){return ?}
//2. [화살표함수] const name = (x)=>{return ?}
//3. [익명(이름없는) 함수]
//      익명 함수를 쓰는 이유 [1. 일회성, 2. 이벤트성]
// -1 function () {} or () {}
// -2 ()=.{}

const arr = Array(1000)
  .fill(1)
  .map((v, i) => i);

const airplane = {
  name: '보잉707',
  company: '에어서울',
  passenger: 200,
  airport: {
    start: '인천공항',
    end: '나리타공항',
  },
};
