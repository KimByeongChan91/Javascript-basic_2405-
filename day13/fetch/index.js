//  클라이언트[프론트엔드] <-> 서버[백엔드]
// http 방식으로 데이터를 주고 받음
// http 방식의 중요한 원칙
// 1. stateLess[request//response]
// 2. 쿠키, 세션, JWT[  ]
//  -1. 무신사 들어옴
//  -2. 로그인을 함[쿠키, 세션, JWT 받음]
// 3.restful api
//   /webtoon/list/monday/id=1234
//  ./netflix/bext/id=293829

// const data = fetch('https://fakerapi.it/api/v1/addresses?_quantity=10');
// data.then((v) => v.json()).then((v) => console.log(v));

// const data1 = fetch('https://fakerapi.it/api/v1/companies?_quantity=20');
// data1.then((v) => v.json()).then((v) => console.log(v));

//card - image, title, author, description,

const images = [
  'https://fastly.picsum.photos/id/95/200/300.jpg?hmac=XW2T1mpTuATtTLyDvkvdQqgh2nodO9Zudo3dH2aXCBA',
  'https://fastly.picsum.photos/id/95/200/300.jpg?hmac=XW2T1mpTuATtTLyDvkvdQqgh2nodO9Zudo3dH2aXCBA',
  'https://fastly.picsum.photos/id/95/200/300.jpg?hmac=XW2T1mpTuATtTLyDvkvdQqgh2nodO9Zudo3dH2aXCBA',
  'https://fastly.picsum.photos/id/95/200/300.jpg?hmac=XW2T1mpTuATtTLyDvkvdQqgh2nodO9Zudo3dH2aXCBA',
  'https://fastly.picsum.photos/id/95/200/300.jpg?hmac=XW2T1mpTuATtTLyDvkvdQqgh2nodO9Zudo3dH2aXCBA',
  'https://fastly.picsum.photos/id/95/200/300.jpg?hmac=XW2T1mpTuATtTLyDvkvdQqgh2nodO9Zudo3dH2aXCBA',
  'https://fastly.picsum.photos/id/95/200/300.jpg?hmac=XW2T1mpTuATtTLyDvkvdQqgh2nodO9Zudo3dH2aXCBA',
  'https://fastly.picsum.photos/id/95/200/300.jpg?hmac=XW2T1mpTuATtTLyDvkvdQqgh2nodO9Zudo3dH2aXCBA',
  'https://fastly.picsum.photos/id/95/200/300.jpg?hmac=XW2T1mpTuATtTLyDvkvdQqgh2nodO9Zudo3dH2aXCBA',
  'https://fastly.picsum.photos/id/95/200/300.jpg?hmac=XW2T1mpTuATtTLyDvkvdQqgh2nodO9Zudo3dH2aXCBA',
  'https://fastly.picsum.photos/id/95/200/300.jpg?hmac=XW2T1mpTuATtTLyDvkvdQqgh2nodO9Zudo3dH2aXCBA',
  'https://fastly.picsum.photos/id/95/200/300.jpg?hmac=XW2T1mpTuATtTLyDvkvdQqgh2nodO9Zudo3dH2aXCBA',
  'https://fastly.picsum.photos/id/95/200/300.jpg?hmac=XW2T1mpTuATtTLyDvkvdQqgh2nodO9Zudo3dH2aXCBA',
  'https://fastly.picsum.photos/id/95/200/300.jpg?hmac=XW2T1mpTuATtTLyDvkvdQqgh2nodO9Zudo3dH2aXCBA',
  'https://fastly.picsum.photos/id/95/200/300.jpg?hmac=XW2T1mpTuATtTLyDvkvdQqgh2nodO9Zudo3dH2aXCBA',
  'https://fastly.picsum.photos/id/95/200/300.jpg?hmac=XW2T1mpTuATtTLyDvkvdQqgh2nodO9Zudo3dH2aXCBA',
  'https://fastly.picsum.photos/id/95/200/300.jpg?hmac=XW2T1mpTuATtTLyDvkvdQqgh2nodO9Zudo3dH2aXCBA',
  'https://fastly.picsum.photos/id/95/200/300.jpg?hmac=XW2T1mpTuATtTLyDvkvdQqgh2nodO9Zudo3dH2aXCBA',
  'https://fastly.picsum.photos/id/95/200/300.jpg?hmac=XW2T1mpTuATtTLyDvkvdQqgh2nodO9Zudo3dH2aXCBA',
  'https://fastly.picsum.photos/id/95/200/300.jpg?hmac=XW2T1mpTuATtTLyDvkvdQqgh2nodO9Zudo3dH2aXCBA',
];

const card = document.querySelector('.card');

const data2 = fetch('https://fakerapi.it/api/v1/books?_quantity=20');
const result = data2
  .then((v) => v.json())
  .then((v) => {
    const bookData = v.data;
    bookData.map((v, i) => {
      const cardElement = document.createElement('div');
      const imageElement = document.createElement('img');
      const titleElement = document.createElement('div');
      const authorElement = document.createElement('div');
      const descriptionElement = document.createElement('div');
      //
      //   cardElement.style.display = 'grid';
      //   cardElement.style.gridTemplateColumns = 'repeat(2, 1fr)';

      cardElement.style.border = '1px solid black';
      cardElement.style.width = '400px';
      cardElement.style.height = '400px';
      cardElement.style.gap = '10px';

      //
      imageElement.src = `${images[i]}`;

      imageElement.style.width = '100%';
      imageElement.style.height = '50%';
      imageElement.style.paddingBottom = '10px';
      imageElement.style.objectFit = 'cover';

      //
      titleElement.innerText = `${v.title}`;

      titleElement.style.fontSize = '20px';
      titleElement.style.fontWeight = '800';
      //
      authorElement.innerText = `${v.author}`;

      authorElement.style.fontSize = '15px';
      authorElement.style.paddingBottom = '15px';
      //
      descriptionElement.innerText = `${v.description}`;

      descriptionElement.style.fontSize = '15px';

      card.appendChild(cardElement);
      cardElement.appendChild(imageElement);
      cardElement.appendChild(titleElement);
      cardElement.appendChild(authorElement);
      cardElement.appendChild(descriptionElement);
    });
  });
