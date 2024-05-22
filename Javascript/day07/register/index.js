// const checkBox = ['checkBox_01', 'checkBox_02', 'checkBox_03', 'checkBox_04'];

// checkBox.forEach((v) => {
//   const checkBoxes = document.querySelector('.checkBoxes');
//   const nextBtn = document.querySelector('.nextBtn');
//   checkBoxes.addEventListener('click', () => {
//     checkBoxes.forEach((v)=>{

//     })

//   });
// });

const optionsClassList = ['.option1', '.option2', '.option3', '.option4'];

optionsClassList.forEach((v) => {
  const option = document.querySelector(v);
  option.addEventListener('click', () => {
    option.classList.toggle('checked');
    option.classList.toggle('notChecked');

    let buttonPass = true;
    optionsClassList.forEach((v) => {
      const option = document.querySelector(v);
      if (option.classList.contains('notChecked')) {
        buttonPass = false;
      }
    });

    const button = document.querySelector('.button');
    if (buttonPass) button.classList.add('passed');
    else button.classList.remove('passed');
  });
});
