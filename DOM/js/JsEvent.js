let btn = document.querySelector("button");

// btn.addEventListener("click", (e) => {
//   console.log(e);
// });

// window.addEventListener("keydown", (e) => {
//   //   alert("有人按");
//   console.log(e);
// });

// btn.addEventListener("click", (e) => {
//   console.log(e.target);
// });

// //符合規定才執行
// let form = document.querySelector("form");
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
// });

let a = document.querySelector(".a");
let b = document.querySelector(".b");
a.addEventListener("click", () => {
  alert("紅框執行");
});
b.addEventListener("click", (e) => {
  e.stopPropagation(); //防止父層執行
  //   e.preventDefault();
  alert("綠框執行");
  console.log(e.target);
});
