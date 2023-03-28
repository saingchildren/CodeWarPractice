const checkZero = (item) => {
  if (item === 0) return true;
  return false;
};

const moveZeros = (arr) => {
  const zerosArray = [];
  const noZeroArray = arr.filter((i) => i !== 0);
  for (let i in arr) {
    if (checkZero(arr[i])) {
      zerosArray.push(0);
    }
  }

  return noZeroArray.concat(zerosArray);
};

//short solution
//const quickSolution = (arr) => {
//  return arr
//    .filter((i) => i !== 0)
//    .concat(new Array(arr.filter((i) => i === 0).length).fill(0));
//};

module.exports = { checkZero, moveZeros };
