// [destructuring]:분해

const days = ['월', '화', '수', '목', '금', '토', '일'];

const [a,b,c, ...rest] = days;

// a - 월
// b - 화
// c - 수
// ...rest - 목, 금, 토, 일
// rest - 목  <- 다음 타겟만 나타남


