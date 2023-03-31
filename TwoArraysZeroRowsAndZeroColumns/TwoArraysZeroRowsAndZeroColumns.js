const plusNumIsNotZero = (num1, num2) => {
  if (num1 + num2 !== 0) return true;
  return false;
};

const countOne = (arr) => {
  return arr.filter((i) => i === 1).length;
};

const countZeroRowsAndColumns = (arr1, arr2) => {
  const rows = arr1.length;
  const cols = arr1[0].length;
  let [rowNotZero, colNotZero] = [[], []];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (plusNumIsNotZero(arr1[i][j], arr2[i][j])) {
        if (rowNotZero[i] === undefined) {
          rowNotZero[i] = 1;
        }

        if (colNotZero[j] === undefined) {
          colNotZero[j] = 1;
        }
      }
    }
  }
  return rows - countOne(rowNotZero) + cols - countOne(colNotZero);
};

module.exports = { plusNumIsNotZero, countZeroRowsAndColumns, countOne };
