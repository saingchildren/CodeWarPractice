const splitString = (string) => {
  return string.split(" ");
};

const chrToNum = (chr) => {
  const chrAll = "abcdefghijklmnopqrstuvwxyz";
  return chrAll.indexOf(chr) + 1;
};

const loopString = (string) => {
  let total = 0;
  for (var i in string) {
    total = total + chrToNum(string[i]);
  }

  return total;
};

const HighestScoringWord = (string) => {
  const arrayString = splitString(string);
  let score = [];
  for (let i in arrayString) {
    score.push(loopString(arrayString[i]));
  }

  return arrayString[score.indexOf(Math.max(...score))];
};

module.exports = { chrToNum, HighestScoringWord, splitString, loopString };
