// console.log("annonymous");

// // Name fn, Function Declaration
// // Function add(){}

// //#2 : Annonymous

// //#2A

// //IIFE : Intermediate Invoke Function Expression
// //ใช้ครั้งเดียวแล้วทิ้ง ข้อดี ประหยัด Memory
// // (function (x, y) {
// //   console.log(x + y);
// // })(10, 5);

// // console.log(
// //   (function (x, y) {
// //     return x + y;
// //   })(10, 5)
// // );

// // let a = (function (x, y) {
// //   return x + y;
// // })(10, 7);
// // console.log(a);

// //#2B

// //VARIABLE = EXPRESSION
// let myVar = 5;

// //VARIABLE = FUNCTION = EXPRESSION

// //ASSIGN anonymous FN to Varia
// const myFunc = function (x, y) {
//   return x + y;
// };

// console.log(myFunc(5, 10));

// //ASSIGN named FN to Variable
// const a = console.log;
// a("hi");

//  ### ANONYM (MODERN : ARROW SYNTAX)

let a = function (x) {
  return x ** 2;
};
let b = (x, y) => x + y;

// B:Bracket
let c = (x, y) => {
  let result = x + y;
  return result;
};

console.log(a(3));
console.log(a(5));
console.log(b(3, 5));
console.log(c(3, 5));
