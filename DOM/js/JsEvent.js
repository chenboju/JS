let btn = document.querySelector("button");

// btn.addEventListener("click", (e) => {
//   console.log(e);
// });

// window.addEventListener("keydown", (e) => {
//   //   alert("有人按");
//   console.log(e);
// });

btn.addEventListener("click", (e) => {
  console.log(e.target);
});

//符合規定才執行
let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
