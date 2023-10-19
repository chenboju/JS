console.log(addtion1(10, 5));
function addtion1(a, b) {
  //可無視位置呼叫
  return a + b;
}
//console.log(addtion1(10, 5));

//onsole.log(addtion2(10, 5));
let addtion2 = function (a, b) {
  //會有位置差別
  return a + b;
};
console.log(addtion2(10, 5));

let chad = {
  name: "chad",
  greet() {
    console.log(this.name + "打招呼");
  },
  walk: function () {
    console.log(this.name + "正在走路");
  },
};

chad.greet();
chad.walk();

//first parament event?
//事件發生後，要執行哪個funtion
// function reast() {
//   alert("有人正在點擊畫面");
// }
//addEventListener==higher order function
//reast==callback funtion
// window.addEventListener("click", reast);

//另一種寫法
/* 1.程式碼中有許多callback 都採用function declaration
    都要避開命名重複，且命名可能會沒有意義*/
window.addEventListener("click", function () {
  alert("有人正在點擊畫面");
});

//IIFE
(function (a, b) {
  console.log(a + b);
})(20, 20);

//Arrow  =>

//1
let hello = () => {
  console.log("hello");
};
hello();

let wilson = {
  name: "wilson",
  //arrow function 沒有this 規定
  walk: () => {
    console.log("wilson is walink");
    //console.log(this);
  },
  walk1() {
    console.log(this.name + " is walink");
  },
  walk2: function () {
    console.log(this.name + " is walink");
  },
};
wilson.walk();

window.addEventListener("click", () => {
  alert("有人正在按螢幕");
});

//2
//單數
let add1 = (a) => {
  return a;
};
console.log(add1(10));
//負數
let add2 = (a, b) => {
  return a + b;
};
console.log(add2(10, 5));

let num = () => 15;
console.log(num());

//加大掛號就要有return  若程式較多加大括比較好
let num1 = () => {
  15;
};
console.log(num1());

let add3 = (a, b) => a + b;
console.log(add3(10, 8));
