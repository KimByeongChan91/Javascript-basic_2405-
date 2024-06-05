const inputTextMsg = document.getElementById('inputTextMsg');
const inputText = document.getElementById('inputText');

// const greet = document.querySelector('.greet');
const inputBtn = document.querySelector('.inputBtn');

export const greetFunc = inputBtn.addEventListener('click', () => {
  if (inputText.value == '') {
    alert('내용을 입력하세요.');
  } else {
    const newTodo = document.createElement('div');
    const del = document.createElement('button');
    const todoForm = document.querySelector('.todoForm');

    newTodo.innerText = inputText.value;
    newTodo.style.width = '200px';
    newTodo.style.height = '200px';

    del.innerText = 'X';

    newTodo.appendChild(todoForm);
    del.appendChild(newTodo);

    // greet.classList.toggle('hidden');
  }
});
