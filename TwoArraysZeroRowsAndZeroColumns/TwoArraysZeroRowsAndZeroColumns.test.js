const { test, expect } = require("@jest/globals");
const {
  plusNumIsNotZero,
  countZeroRowsAndColumns,
  countOne,
} = require("./TwoArraysZeroRowsAndZeroColumns");

test("plus two number", () => {
  const ans = plusNumIsNotZero(4, 5);
  expect(ans).toBe(true);
});

test("count how much one in array", () => {
  const ans = countOne([1, 2, 1]);
  expect(ans).toBe(2);
});

test("test final function countZeroRowsAndColumns", () => {
  const arr1 = [
    [1, 3, -5],
    [2, -4, 6],
  ];

  const arr2 = [
    [-1, -3, 5],
    [-2, -4, -6],
  ];
  const ans = countZeroRowsAndColumns(arr1, arr2);
  expect(ans).toBe(3);
});
