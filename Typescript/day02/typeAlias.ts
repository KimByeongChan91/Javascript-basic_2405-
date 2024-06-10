//type[타입] Alias[별명]

// type Unit = {
//   hp: Number;
//   skill: String;
//   name: String;
//   attack: (target: Unit) => number;
// };

//movie

// 리터럴 타입
type Grade = '전체이용가' | '12세' | '15세' | '15세';
type Genre = '키덜트' | '액션' | '멜로' | '판타지';

type Movie = {
  name: string;
  genre: Genre[];
  grade: Grade;
};

const insideout1: Movie = {
  name: '인사이드 아웃1',
  genre: ['키덜트', '멜로'],
  grade: '12세',
};

const wonderland: Movie = {
  name: '원더랜드',
  genre: ['멜로', '판타지'],
  grade: '12세',
};

const drive: Movie = {
  name: '드라이브',
  genre: ['액션', '키덜트'],
  grade: '15세',
};

// cgv
const cgv: Movie[] = [
  {
    name: '인사이드 아웃1',
    genre: ['키덜트'],
    grade: '12세',
  },

  {
    name: '원더랜드',
    genre: ['멜로'],
    grade: '12세',
  },

  {
    name: '드라이브',
    genre: ['액션'],
    grade: '15세',
  },
];

// 함수 movie[] 매개변수를 받고, 장르를 하나의 문자열로 출력하는 함수 정의

// const makeGenreStr = (movies: Movie[]) => {
//   movies.forEach((v) => {
//     const result = v.genre.reduce((a,c)=>a + c)
//   });
// };

const makeMsgAlign = (msg:string, align: 'center'| 'start' | 'end') =>{
    const span = document.createElement('span')
    span.innerText = msg
    span.style.textAlign = align
    return span
}

makeMsgAlign("점메추","center")

