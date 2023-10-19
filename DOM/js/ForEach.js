let myFor = [1, 2, 3, 4, 5, 6, 7];
for (let i = 0; i < myFor.length; i++) {
  myFor[i] = myFor[i] + 3;
}
console.log(myFor);

let myForEach = [1, 2, 3, 4, 5, 6, 7];

// function plus(n) {
//   console.log(n + 3);
// }
//myForEach.forEach(plus);
// myForEach.forEach(function (n) {
//   console.log(n + 3);
// });
// myForEach.forEach((n) => {
//   console.log(n + 3);
// });

myForEach.forEach((n, index) => {
  console.log(index);
  console.log(n + " is at index " + index);
});

//nodeList
let hello = document.querySelectorAll(".hello");
hello.forEach((hello) => {
  console.log(hello);
});

let hellos = document.getElementsByClassName("hello");
hellos.forEach((hello) => {
  console.log(hello);
});
