const { test, expect } = require("@jest/globals");
const inArray = require("./WhichAreIn").inArray;
const findSubString = require("./WhichAreIn").findSubString;

test("findSubString ex live & alive return true else return false", () => {
  const ans = findSubString("live", "alive");
  expect(ans).toBe(true);
});

test("test final function inArray", () => {
  const ans = inArray(
    ["arp", "live", "strong"],
    ["lively", "alive", "harp", "sharp", "armstrong"]
  );
  expect(ans).toStrictEqual(["arp", "live", "strong"]);
});
