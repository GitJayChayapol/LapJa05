const year = (n) => {
  if (n % 100 == 0) {
    if (n % 400 == 0) {
      return "leap year";
    } else {
      return "no leap year";
    }
  } else if (n % 4 == 0) {
    return "leap year";
  } else {
    return "no leap year";
  }
};
console.log(year());
