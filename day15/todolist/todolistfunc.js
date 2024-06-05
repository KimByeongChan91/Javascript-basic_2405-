// function

const plusBtn = document.getElementById('btn');
const upcoming = document.getElementById('addList');
const finished = document.getElementById('resultList');

//할일 목록 삭제 메서드
function deleteList(e) {
  const removeOne = e.target.parentElement;
  removeOne.remove();
}

//줄 긋는 메서드
// const makeLine = (e) => {
//   makeLineOne = e.target.parentElement;
//   makeLineOne.classList.toggle('checked');
//   makeLineOne.classList.toggle('notChecked');
// };

// // 체크 버튼 클릭하면 할 일 완료 목록 으로 내려가며 줄 긋기
// function checkList(e) {
//   const makeLine = e.target.parentElement;
//   //   makeLine.remove();
//   const resultDiv = document.createElement('div');

//   finished.appendChild(resultDiv);

//   resultDiv.innerHTML = makeLine.innerText;
//   //   resultDiv.style.textDecoration = 'line-through';
//   //   resultDiv.style.color = 'gray';
//   resultDiv.style.width = '700px';
//   //   resultDiv.style.backgroundColor = 'white';
//   resultDiv.style.padding = '5px 20px 5px 5px';
//   resultDiv.style.borderRadius = '5px';
//   resultDiv.style.marginTop = '5px';

//   //체크 버튼 클릭하면 줄긋기
//   resultDiv.addEventListener('click', () => {
//     resultDiv.classList.toggle('.checked');
//     resultDiv.classList.toggle('.notchecked');
//   });
// }

// ➕ 버튼 클릭하면 upcoming 목록에 할일 추가
// 빈입력창 추가 ⚠️alert 메시지

// export const plusBtnEvent = plusBtn.addEventListener('click', () => {
//   const promptText = window.prompt('일정을 입력하세요.');

//   if (promptText.length == 0) {
//     window.alert('내용을 입력하세요!');
//   } else {
//     const upcomingDiv = document.createElement('div');
//     const check = document.createElement('button');
//     const del = document.createElement('button');

//     //
//     upcomingDiv.innerText = promptText;

//     upcomingDiv.style.width = '700px';
//     // upcomingDiv.style.color = 'black';
//     upcomingDiv.style.backgroundColor = 'white';
//     upcomingDiv.style.padding = '5px 20px 5px 5px';
//     upcomingDiv.style.borderRadius = '5px';
//     upcomingDiv.style.marginTop = '5px';

//     //완료 체크버튼,

//     check.innerHTML = '<i class="fa-solid fa-check"></i>';
//     check.style.fontSize = '10px';
//     check.style.cursor = 'pointer';
//     check.style.float = 'right';
//     check.addEventListener('click', () => {
//       upcomingDiv.classList.toggle('checked');
//       upcomingDiv.classList.toggle('notChecked');
//     });

//     //삭제버튼
//     del.innerHTML = '<i class="fa-solid fa-x"></i>';
//     del.style.fontSize = '10px';
//     del.style.cursor = 'pointer';
//     del.style.float = 'right';

//     //삭제버튼 클릭시 리스트지우기 이벤트 실행
//     del.addEventListener('click', deleteList);

//     upcoming.appendChild(upcomingDiv);
//     upcomingDiv.appendChild(del);
//     upcomingDiv.appendChild(check);
//   }
// });

// Todolist 목록이 빈칸이라면 다시 이미지 띄우기

// 할 일 추가하면 이미지 없어지고 할일 추가되도록

const inputValue = document.getElementById('addValue');
const inputBtn = document.getElementById('btn');

// input태그로 다시 만들기
export const inputEvent = inputBtn.addEventListener('click', () => {
  // const promptText = window.prompt('일정을 입력하세요.');

  if (inputValue.value == false) {
    alert('내용을 입력하세요!');
  } else {
    const upcomingDiv = document.createElement('div');
    const check = document.createElement('button');
    const del = document.createElement('button');

    //
    upcomingDiv.innerText = inputValue.value;

    upcomingDiv.style.width = '700px';
    // upcomingDiv.style.color = 'black';
    upcomingDiv.style.backgroundColor = 'white';
    upcomingDiv.style.padding = '5px 20px 5px 5px';
    upcomingDiv.style.borderRadius = '5px';
    upcomingDiv.style.marginTop = '5px';

    //완료 체크버튼,

    check.innerHTML = '<i class="fa-solid fa-check"></i>';
    check.style.fontSize = '10px';
    check.style.cursor = 'pointer';
    check.style.float = 'right';
    check.addEventListener('click', () => {
      upcomingDiv.classList.toggle('checked');
      upcomingDiv.classList.toggle('notChecked');
    });

    //삭제버튼
    del.innerHTML = '<i class="fa-solid fa-x"></i>';
    del.style.fontSize = '10px';
    del.style.cursor = 'pointer';
    del.style.float = 'right';

    //삭제버튼 클릭시 리스트지우기 이벤트 실행
    del.addEventListener('click', deleteList);

    upcoming.appendChild(upcomingDiv);
    upcomingDiv.appendChild(del);
    upcomingDiv.appendChild(check);
  }
});
