// 함수 만들기

//  1.
//  my_string  n  result
//  "hello"  3   "hhheeellllllooo"

const solution = (my_string, n) => {
  [...my_string].map((v) => v.repeat(n)).join('');
};

// 2.
// myString result
// "abstract algebra" "AbstrAct AlgebrA"
// "PrOgRaMmErS" "progrAmmers"

const solution2 = (myString) => {
  [...myString].map((v) => (v == 'a' ? 'A' : v.toLowerCase())).join('');
};
