const { test, expect } = require("@jest/globals");
const HighestScoringWord = require("./HighestScoringWord").HighestScoringWord;
const chrToNum = require("./HighestScoringWord").chrToNum;
const splitString = require("./HighestScoringWord").splitString;
const loopString = require("./HighestScoringWord").loopString;

test("split a string to array", () => {
  const ans = splitString("man i need a taxi up to ubud");
  expect(ans).toStrictEqual([
    "man",
    "i",
    "need",
    "a",
    "taxi",
    "up",
    "to",
    "ubud",
  ]);
});

test("loop a string & return score", () => {
  const ans = loopString("aaa");
  expect(ans).toBe(3);
});

test("chr to number ex a = 1, b = 2", () => {
  const ans = chrToNum("z");
  expect(ans).toBe(26);
});

test("test final function HighestScoringWord", () => {
  const ans = HighestScoringWord("man i need a taxi up to ubud");
  expect(ans).toBe("taxi");
});
