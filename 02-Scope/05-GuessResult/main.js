let message = "Welcome to Thailand";

function logMessage(message) {
  message = "Hello everybody";
  console.log(message); // *
}

logMessage(message);
console.log(message); // **

//Hello everybody  ใช้ข้อมูลในฟังก์ชั่น
//Welcom to Thailand  ใช้ข้อมูล Global

let name = "John";

function sayHi(input) {
  console.log(name); // ***
  name = input;
}

//
