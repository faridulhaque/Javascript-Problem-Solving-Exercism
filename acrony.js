const parse = (s) => {
  const splitted = s.split(/[,;_-\s]+/);

  const mapped = splitted.map((s) => s[0]);

  

  return mapped.join("").toUpperCase();
};

const res = parse("Something - I made up from thin air");
console.log("r", res);
