import { colorList } from './todolistcolor.js';
// import { addTodo } from './todolistfunc.js';
// import { deleteList } from './todolistfunc.js';

const plusBtn = document.querySelector('.plusButton');
const upcoming = document.querySelector('.addValue');
const finished = document.querySelector('.result');

// 목록 하나만 삭제 메서드
function deleteList(e) {
  let removeOne = e.target.parentElement;
  removeOne.remove();
}

// 완료 체크시 줄 생기는 메서드
function checkList(e) {
  let makeLine = e.target.parentElement;
  makeLine.style.backgroundColor = 'red';
}

plusBtn.addEventListener('click', () => {
  const promptText = window.prompt('일정을 입력하세요.');

  if (promptText.length == 0) {
    window.alert('내용을 입력하세요!');
  } else {
    const upcomingDiv = document.createElement('div');
    const check = document.createElement('button');
    const del = document.createElement('button');

    //
    upcomingDiv.innerText = promptText;

    upcomingDiv.style.width = '700px';
    upcomingDiv.style.color = 'black';
    upcomingDiv.style.backgroundColor = 'white';
    upcomingDiv.style.padding = '5px 20px 5px 5px';
    upcomingDiv.style.borderRadius = '5px';
    upcomingDiv.style.marginTop = '5px';

    //완료 체크버튼

    check.innerHTML = '<i class="fa-solid fa-check"></i>';
    check.style.fontSize = '10px';
    check.style.cursor = 'pointer';
    check.style.float = 'right';
    check.addEventListener('click', checkList);

    //삭제버튼
    del.innerHTML = '<i class="fa-solid fa-x"></i>';
    del.style.fontSize = '10px';
    del.style.cursor = 'pointer';
    del.style.float = 'right';

    del.addEventListener('click', deleteList); //삭제버튼 클릭시 리스트지우기 이벤트 실행

    upcoming.appendChild(upcomingDiv);
    upcomingDiv.appendChild(del);
    upcomingDiv.appendChild(check);
  }
});
