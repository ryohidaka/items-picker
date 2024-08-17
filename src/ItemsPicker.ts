/**
 * Generates a random item from the provided array, constrained by a maximum value.
 *
 * @param items - Array of items to select from.
 * @param maxSum - Maximum allowed value for the selected item.
 * @param key - The key of the item object which has a numeric value.
 * @returns A randomly selected item that fits within the maxSum, or undefined if none found.
 */
export function getRandomItem<T>(
  items: T[],
  maxSum: number,
  key: keyof T,
): T | undefined {
  const filteredItems = items.filter((item) => {
    const value = item[key];
    return typeof value === "number" && value <= maxSum;
  });

  if (filteredItems.length === 0) return undefined;

  return filteredItems[Math.floor(Math.random() * filteredItems.length)];
}
