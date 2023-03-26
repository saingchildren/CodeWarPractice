const { test, expect } = require("@jest/globals");
const categoryNumber = require("./FindTheParityOutlier").categoryNumber;
const FindTheParityOutlier =
  require("./FindTheParityOutlier").FindTheParityOutlier;

test("categoryNumber primeNumber ? true : false", () => {
  const ans = categoryNumber(2);
  expect(ans).toBe(true);
});

test("FindTheParityOutlier", () => {
  const ans = FindTheParityOutlier([2, 4, 0, 100, 4, 11, 2602, 36]);
  expect(ans).toBe(11);
});
