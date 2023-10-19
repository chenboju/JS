console.log(window);

console.log(document.getElementById("myId"));
let myHead = document.getElementById("myId");
console.log(myHead);

let myP = document.getElementsByClassName("my-P"); //動態
console.log(myP);

let firstd_found1 = document.querySelector(".my-P"); //找到第一個元素 Selector css元素 深度優先
console.log(firstd_found1);

let firstd_found = document.querySelector("a.my-p");
console.log(firstd_found);

let firstd_found2 = document.querySelectorAll(".my-P"); //return 所選取的元素串列
console.log(firstd_found2);
console.log(firstd_found2[2]);

let firstd_found3 = document.querySelectorAll("a"); //return 所選取的元素串列 靜態
console.log(firstd_found3);

//HTMLCollection 動態 dynamic
let hellos = document.getElementsByClassName("hello");
let helloss = document.querySelectorAll(".hello");
console.log(hellos.length);
console.log(helloss.length);
console.log("\n");
let body = document.querySelector("body");
let p = document.createElement("p");
p.innerText = "this is a new p";
p.classList.add("hello");
body.appendChild(p);

console.log("改變dom之後");
console.log(hellos.length); //4
console.log(helloss.length); //3
//Node List 靜態 static

let body1 = document.querySelector(".body");
console.log(body.childNodes);
console.log(body.children);
