const { test, expect } = require("@jest/globals");
const { checkZero, moveZeros } = require("./MovingZerosToTheEnd");

test("checkZero item === 0 ? true : false", () => {
  const ans = checkZero(0);
  expect(ans).toBe(true);
  const ans1 = checkZero("1");
  expect(ans1).toBe(false);
});

test("check final function moveZeros", () => {
  const ans = moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]);
  expect(ans).toStrictEqual([false, 1, 1, 2, 1, 3, "a", 0, 0]);
});
