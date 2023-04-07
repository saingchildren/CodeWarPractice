const { test, expect } = require("@jest/globals");
const {
  firstHandler,
  secondHandler,
  createPhoneNumber,
} = require("./CreatePhoneNumber");

test("add '()' for first", () => {
  const ans = firstHandler("111");
  expect(ans).toBe("(111) ");
});

test("add '-' for second", () => {
  const ans = secondHandler("1111");
  expect(ans).toBe("1111-");
});

test("test final function", () => {
  const ans = createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
  expect(ans).toBe("(123) 456-7890");
});
