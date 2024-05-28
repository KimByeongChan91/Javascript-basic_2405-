const users = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 35 },
];

const a = users.map((v) => ({ name: v.name }));


users.map((v) => ({ name: v.name, age: v.age }));

const { name: nickname, age: koreanAge } = users;

const d = users.map((name, age) => ({ nickname: name, koreanAge: age }));



//name을 nickname으로 age는 koreanAge로 바꾸기

