// const b = document.querySelector(".box");

// b.style.backgroundColor = "blue";

// b.addEventListener("click", () => {
//   window.alert("아메리카노 클릭함");
// });

const bar = document.querySelector(".bar");

const x = document.querySelector(".xIcon");

x.style.display = "none";
x.style.transition = "all 0.5s";

bar.addEventListener("click", () => {
  bar.style.display = "none";
  x.style.display = "block";
});
