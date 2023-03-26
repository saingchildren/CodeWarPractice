const { expect, test } = require("@jest/globals");
const isValidCoordinates = require("./CoordinatesValidator").isVaildCoordinates;
const checkFirst = require("./CoordinatesValidator").checkFirst;
const checkSecond = require("./CoordinatesValidator").checkSecond;
const checkSymbol = require("./CoordinatesValidator").checkSymbol;
const splitString = require("./CoordinatesValidator").splitString;

test("split a string with , return array length is 2", () => {
  const ans = splitString("23.234, - 23.4234");
  expect(ans).toHaveLength(2);
});

test("first float between 0 and 90, (positive or negative)", () => {
  const ans = checkFirst("24.53525235");
  expect(ans).toBe(true);
});

test("second float between 0 and 180, (positive or negative)", () => {
  const ans = checkSecond("-23.4234");
  expect(ans).toBe(true);
  const ans1 = checkSecond("143");
  expect(ans1).toBe(true);
});

test("coordinate can only contain -.", () => {
  const ans = checkSymbol("04");
  expect(ans).toBe(true);
});

test("isValidCoordinates", () => {
  const ans = isValidCoordinates("24.53525235, 23.45235");
  expect(ans).toBe(true);
});
