//local Storage 沒有過期的概念 如SSD的作用
// localStorage.setItem("name", "Chad");
// localStorage.setItem("age", "26");

// let myName = localStorage.getItem("name");
// let myAge = localStorage.getItem("age");
// console.log(typeof myAge);
// console.log(myName);

// localStorage.removeItem("name");

// localStorage.clear();

//Json

// localStorage.setItem("myLuckNumbers", [1, 2, 3, 4, 5, 6]);
// let = myNumbers = localStorage.getItem("myLuckNumbers");
// myNumbers.forEach((n) => {
//   console.log(n);
// });

let myLuckNumbers = [1, 2, 3, 4, 5, 6];
localStorage.setItem("myNumbers", JSON.stringify(myLuckNumbers));
let myArr = JSON.parse(localStorage.getItem("myNumbers"));
myArr.forEach((n) => {
  console.log(n);
});
