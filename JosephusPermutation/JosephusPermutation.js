const handlePoint = (num, arrayLength) => {
  return num % arrayLength;
};

const countedOut = (point, items) => {
  return items.filter((i, index) => index !== point);
};

const josephus = (items, k) => {
  const ans = [];
  let point = 0;
  const shift = k - 1;
  while (items.length > 0) {
    point = point + shift;
    point = handlePoint(point, items.length);
    ans.push(items[point]);
    items = countedOut(point, items);
  }

  return ans;
};

josephus([1, 2, 3, 4, 5, 6, 7], 3);

module.exports = { handlePoint, countedOut, josephus };
