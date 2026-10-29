import { expect, test } from "vitest";
import { isEven } from "./is-even.js";

test.each([0, -0, 2, -2, 100])("isEven(%s) returns true", (number) => {
  expect(isEven(number)).toBe(true);
});

test.each([1, -1, 3, -3, 101])("isEven(%s) returns false for odd integers", (number) => {
  expect(isEven(number)).toBe(false);
});

test.each([2.5, -2.5, NaN, Infinity, -Infinity, "2", null, undefined, true, {}, [], 2n])(
  "isEven(%s) returns false for values that are not integers",
  (number) => {
    expect(isEven(number)).toBe(false);
  },
);
