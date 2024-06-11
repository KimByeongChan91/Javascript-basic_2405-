// enumeration 나열한다, 펼치는 느낌 union타입과 쓰임이 똑같다
// union
type A = 1 | 2 | 3 | 4;

// emum
enum Direction {
  East,
  West,
  South,
  North,
}

const dir: Direction = Direction.East;

enum HttpStatus {
  OK,
  NotFound,
}
const response: HttpStatus = HttpStatus.OK;

enum Status {
  Pending,
  Inprogress,
  Completed,
  Failed,
}

const getStatus = (status: Status): string => {
  switch (status) {
    case Status.Pending:
      return '작업 대기 중';
    case Status.Inprogress:
      return '작업 진행 중';
    case Status.Completed:
      return '작업 완료';
    case Status.Failed:
      return '작업 실패';
    default:
      return '알 수 없는 상태';
  }
};
