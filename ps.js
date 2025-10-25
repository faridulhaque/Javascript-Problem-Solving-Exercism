const clean = (nums) => {
  if (/[a-z]/s.test(nums) || /[A-Z]/s.test(nums)) {
    throw new Error("Letters not permitted");
  }

  if (/[!"#$%&'*,:;<=>?@[\\\]^_`{|}~]/.test(nums)) {
    throw new Error("Punctuations not permitted");
  }

  let filtered = [];
  let numb = "";
  for (const s of nums) {
    if (s.match(/[0-9]/g)) filtered.push(s);
  }

  if (filtered.length < 10) {
    throw new Error("Must not be fewer than 10 digits");
  } else if (filtered.length === 10) {
    numb = filtered.join("");
  } else if (filtered.length === 11) {
    console.log("f", filtered);
    if (filtered[1] === "1") {
      numb = filtered.slice(1).join("");
    } else {
      throw new Error("11 digits must start with 1");
    }
  } else {
    throw new Error("Must not be greater than 11 digits");
  }

  if (numb.startsWith("0")) throw new Error("Area code cannot start with zero");

  if (numb.startsWith("1")) throw new Error("Area code cannot start with one");

  if (numb[3] === "0") {
    throw new Error("Exchange code cannot start with zero");
  }
  if (numb[3] === "1") {
    throw new Error("Exchange code cannot start with one");
  }

  return numb;
};

const res = clean("22234567890");
console.log(res);
