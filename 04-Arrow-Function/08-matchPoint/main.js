const football = (s) => {
  if (s == "win") return 3;
  else if (s == "tie") return 1;
  else if (s == "lose") return 0;
};

console.log(`score ${football()}`);
