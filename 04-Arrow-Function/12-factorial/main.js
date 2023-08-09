const mf = (f) => {
  let count = 1;
  for (i = 1; i <= f; i++) {
    count = count * i;
  }
  return count;
};
