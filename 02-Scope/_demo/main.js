// // // GLOBAL - SCOPE

// // console.log("scope");
// // let message = "hi";

// // function sayhi() {
// //   //FUNCTION - SCPOE
// //   let message = "hello";
// //   console.log(`## ${message}`);
// // }

// // console.log(message);
// // sayhi();

// let message = "h";
// message = "a";

// const NUM = 5;
// // const NUM = 5;

// var myVar = 5;
// var myVar = 10;

// //function : sayHi == identifier
// function sayHi(m) {
//   let message = "h";
//   console.log(m);
// }

// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }
// console.log(i + 100);
// let message = "global";
// {
//   //   let message = "local";
//   console.log(message);
// }
// console.log(message);

let message = "GB:Welcome";
function sayHi(user) {
  if (user == "admin") {
    let message = "WELCOME";
    console.log(message + "admin");
  } else {
    console.log(message + "guest");
  }
}

sayHi("ad");
