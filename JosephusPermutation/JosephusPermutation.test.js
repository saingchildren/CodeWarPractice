const { test, expect } = require("@jest/globals");
const handlePoint = require("./JosephusPermutation").handlePoint;
const josephus = require("./JosephusPermutation").josephus;
const countedOut = require("./JosephusPermutation").countedOut;

test("handlePoint simulation a circle", () => {
  const ans = handlePoint(8, 7);
  expect(ans).toBe(1);
});

test("countedOut function is remove items element", () => {
  const ans = countedOut(2, [1, 2, 3, 4, 5, 6, 7]);
  expect(ans).toStrictEqual([1, 2, 4, 5, 6, 7]);
});

test("test final function josephus", () => {
  const ans = josephus([1, 2, 3, 4, 5, 6, 7], 3);
  expect(ans).toStrictEqual([3, 6, 2, 7, 5, 1, 4]);
});
