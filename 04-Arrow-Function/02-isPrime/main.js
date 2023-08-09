const myPrime = (num) => {
  isPrime = true;
  for (let d = 2; d < num; d++) {
    if (num % d == 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    return `${num} is Prime Number`;
  } else return `${num} Not Prime Number`;
};

console.log(myPrime(22));
