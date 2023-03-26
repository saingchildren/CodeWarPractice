const categoryNumber = (num) => {
  if (num % 2 === 0) return true;
  return false;
};

const FindTheParityOutlier = (arrayNum) => {
  primeNum = [];
  compositeNum = [];
  for (const i of arrayNum) {
    if (categoryNumber(i)) {
      compositeNum.push(i);
    } else {
      primeNum.push(i);
    }
  }

  if (primeNum.length === 1) return primeNum[0];
  return compositeNum[0];
};


module.exports = { categoryNumber, FindTheParityOutlier };
