import { describe, it, expect } from "vitest";
import { getRandomCombination } from "../src";

describe("getRandomCombination", () => {
  const items = [
    { id: 1, value: 100 },
    { id: 2, value: 200 },
    { id: 3, value: 300 },
    { id: 4, value: 400 },
    { id: 5, value: 500 },
  ];

  it("should return a combination of items with a total value less than or equal to maxSum", () => {
    const maxSum = 800;
    const result = getRandomCombination(items, "value", maxSum);

    const totalValue = result.reduce((sum, item) => sum + item.value, 0);
    expect(totalValue).toBeLessThanOrEqual(maxSum);
  });

  it("should not include duplicates if allowDuplicates is false", () => {
    const maxSum = 1000;
    const result = getRandomCombination(items, "value", maxSum, false);

    const ids = result.map((item) => item.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  it("should allow duplicates if allowDuplicates is true", () => {
    const maxSum = 1000;
    const result = getRandomCombination(items, "value", maxSum, true);

    const ids = result.map((item) => item.id);
    expect(ids.length).toBeGreaterThan(0);
  });

  it("should return an empty array if no items can be selected under the maxSum", () => {
    const maxSum = 50;
    const result = getRandomCombination(items, "value", maxSum);

    expect(result).toEqual([]);
  });
});
