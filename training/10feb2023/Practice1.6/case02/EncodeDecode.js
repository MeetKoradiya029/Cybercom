s = "2202311";

const numDecoder = (s) => {
  const decoder = {
    1: "A",
    2: "B",
    3: "C",
    4: "D",
    5: "E",
    6: "F",
    7: "G",
    8: "H",
    9: "I",
    10: "J",
    11: "K",
    12: "L",
    13: "M",
    14: "N",
    15: "O",
    16: "P",
    17: "Q",
    18: "R",
    19: "S",
    20: "T",
    21: "U",
    22: "V",
    23: "W",
    24: "X",
    25: "Y",
    26: "Z",
  };

  let ways = new Array(s.length + 1).fill(0);
  ways[0] = 1; // [1, 0, 0, ...., 0]

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j <= i - 1; j++) {
      let substr = s.substring(j, i);
      //   console.log(substr);
      if (substr in decoder) {
        ways[i] += ways[j];
        // console.log(" inside the condition : " + ways);
      }
    }
  }

  return ways.at(-1);
};

console.log("possible number of ways :- " + numDecoder(s));
