const isIsogram = (data) => {
  const str = data.toLowerCase();
  let isIsogram = true;
  const filtered = [...str]
    .filter((d) => d.toLowerCase() !== d.toUpperCase())
    .sort();
  for (let i = 0; i < filtered.length - 1; i++) {
    if (filtered[i].toLowerCase() === filtered[i + 1].toLowerCase()) {
      isIsogram = false;
      break;
    }
  }

  return isIsogram;
};

const res = isIsogram("Alphabet");
console.log(res);
