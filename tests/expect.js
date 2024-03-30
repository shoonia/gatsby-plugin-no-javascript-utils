const { strictEqual, deepStrictEqual } = require('node:assert/strict');

exports.expect = (actual) => ({
  toBe: (expected) =>
    strictEqual(actual, expected),

  toStrictEqual: (expected) =>
    deepStrictEqual(actual, expected),

  toHaveBeenCalledTimes: (expected) =>
    strictEqual(actual.mock.callCount(), expected),

  toHaveBeenLastCalledWith: (...expected) =>
    deepStrictEqual(expected, actual.mock.calls.at(-1).arguments),
});
