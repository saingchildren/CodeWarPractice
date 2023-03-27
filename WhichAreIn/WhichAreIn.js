const findSubString = (sub, all) => {
  if (all.indexOf(sub) !== -1) return true;
  return false;
};

const inArray = (array1, array2) => {
  const ans = [];
  for (let i of array1) {
    for (let j of array2) {
      if (findSubString(i, j)) {
        ans.push(i);
        break;
      }
    }
  }

  return ans.sort();
};

module.exports = { findSubString, inArray };
