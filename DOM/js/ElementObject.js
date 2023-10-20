// let myButton = document.querySelector("#myBtn");

// myButton.addEventListener("click", () => {
//   alert("你點擊了BTN");
// });

//appendChild
let body = document.querySelector("body");
let myH1 = document.createElement("h1");
body.appendChild(myH1);
// myH1.innerText = "<a 這是我的H1></a>";
// myH1.innerHTML = "<a 這是我的H1></a>"; //會被當成html語法

console.log(body.children[0].children);
console.log(body.children[1].children);
let firstP = document.querySelector("p");
console.log(firstP.parentElement.parentElement);

// console.log(typeof firstP.classList);
// console.log(firstP.classList);

// firstP.classList.add(green);
// console.log(firstP.classList);
// firstP.classList.remove(green);
// console.log(firstP.classList);

firstP.addEventListener("click", () => {
  firstP.classList.toggle("red");
});

console.log(firstP.classList.contains("red"));

// let a = document.querySelector("a");
// console.log(a.getAttribute("title"));
// console.log(a.getAttribute("href"));

let btn = document.querySelector("button");
btn.addEventListener("click", () => {
  let a = document.querySelector("a");
  a.remove();
});

// btn.style.backgroundColor = "green";
// btn.style.color = "white";

btn.style = "background-Color : green; color : white";
