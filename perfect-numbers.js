const classify = (n) => {
  if (n <= 0) {
    throw new Error("Classification is only possible for natural numbers.");
  }

  let factors = [];

  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      factors.push(i);
    }
  }

  const sum = factors.reduce((acc, c) => acc + c, 0);
  if (sum === n) {
    return "perfect";
  } else if (sum < n) {
    return "deficient";
  } else if (sum > n) {
    return "abundant";
  }
};

const res = classify(8);
console.log("res", res);
