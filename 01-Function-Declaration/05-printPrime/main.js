// let isPrime = prompt("Get you Number of Check");

// function primeNumber(isPrime) {
//   for (let i = 2; i <= isPrime; i++) {
//     let count = 0;
//     for (let j = 2; j <= 100; j++) {
//       if (i % j == 0) {
//         count = count + 1;
//       }
//     }
//     if (count > 1) continue;
//     else {
//     }
//     console.log(i);
//   }
// }

// primeNumber(isPrime);

function checkPrime(num) {
  let isPrime = true;
  for (let d = 2; d < num; d++) {
    if (num % d == 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(num);
  }
}

function printPrime(limit) {
  for (let n = 2; n <= limit; n++) {
    checkPrime(n);
  }
}
printPrime(23);
