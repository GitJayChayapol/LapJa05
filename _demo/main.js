// // ffff;
// // test;

// function soundOfBird() {
//   console.log("เสียงงง นกกรงหัวจุกมันริก");
//   console.log("จก");
//   for (let i = 1; i <= 11; i++) {
//     console.log("กวิ๊ก ๆๆๆๆๆๆๆ");
//   }
// }

// soundOfBird();

// function isPrime(n) {
//   //   let n = 5;
//   let isPrime = true;
//   for (let divider = 2; divider < n; divider++) {
//     if (n % divider == 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   console.log(n);
// }

// isPrime(5);
// isPrime(12);
// isPrime(13);
// isPrime(7);
// isPrime(5);
// isPrime(5);

function addTwo(n) {
  let result = n + 2;
  return result;
  console.log("End calc");
}
let result = addTwo(5);
console.log(result);

function isPrime(num) {
  for (let d = 2; d < num; d++) {
    console.log(d);
    if (num % d == 0) {
      return false;
    }
  }
  return true;
}
