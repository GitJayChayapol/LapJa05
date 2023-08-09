const square = (n) => {
  n ** 2;
};

console.log(square(7)); // *
//undefined เพราะ Arrow  ไม่ควรมี ปีกกา {}

const calcCircleArea = (r) => Math.PI * r ** 2;
console.log(calcCircleArea(3)); // **
//สามารถคิดได้ตามปกติ เพราะรูปแบบถูกต้อง 28.274
