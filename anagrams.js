const findAnagrams = (c, arr) => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].toLowerCase() === c.toLowerCase()) continue;
    if (arr[i].length !== c.length) continue;
    let org = arr[i];
    let sorted;

    sorted = arr[i].toLowerCase().split("").sort().join("");

    const sortedC = c.toLowerCase().split("").sort().join("");

    if (sorted === sortedC) res.push(org);
  }

  return res;
};

const res = findAnagrams("banana", ["banana", "Banana", "BANANA", "ananab"]);
// → ["ananab"]

console.log("res", res);
