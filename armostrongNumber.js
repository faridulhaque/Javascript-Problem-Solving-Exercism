const isArmstrongNumber = (num) => {
  let numArray = num.toString().split("");

  if (isBigInt(num)) {

     let sum = 0n;
    numArray.forEach((n) => {
     sum = sum + BigInt(n) ** BigInt(numArray.length);

    });

    if (sum === num) return true;
    else return false;

  } else {
    let sum = 0;
    numArray.forEach((n) => {
      sum = sum + Math.pow(Number(n), numArray?.length);
    });

    if (sum === num) return true;
    else return false;
  }
};

const isBigInt = (n) => {
  if (typeof n === "bigint") return true;
  else return false;
};
