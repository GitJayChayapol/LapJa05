// let number = prompt("Get you Number of Check");

// function primeNumber(number) {
//   let isPrime = true;
//   for (let divider = 2; divider < number; divider++) {
//     if (number % divider == 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if (isPrime) {
//     console.log(`${number} is Prime Number`);
//   } else console.log("Not Prime Number");
// }

// primeNumber(number);

//DESIGN FN
//1.INPUT? ==> number
//2.LOGIC IMPLEMENT ?
//3.OUTPUT? boolean true,false
// number ==> boolean

function checkPrime(num) {
  let isPrime = true;
  for (let d = 2; d < num; d++) {
    if (num % d == 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(`${num} is Prime Number`);
  } else console.log(`${num} Not Prime Number`);
}

checkPrime(23);
checkPrime(5);
checkPrime(4);
