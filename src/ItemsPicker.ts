/**
 * Generates a random item from the provided array, constrained by a maximum value.
 *
 * @param items - Array of items to select from.
 * @param maxSum - Maximum allowed value for the selected item.
 * @param key - The key of the item object which has a numeric value.
 * @returns A randomly selected item that fits within the maxSum, or undefined if none found.
 */
function getRandomItem<T>(
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

/**
 * Retrieves a random combination of items from the provided array.
 * The combination's sum is constrained to be less than or equal to `maxSum`.
 * The function retrieves items until no more valid items can be found.
 *
 * @param items - Array of items to select from.
 * @param key - The key of the item object which has a numeric value.
 * @param maxSum - Maximum allowed sum of the values associated with the key.
 * @param allowDuplicates - Flag indicating whether duplicate items are allowed.
 * @returns An array containing the combination of items based on the constraints.
 */
export function getRandomCombination<T>(
  items: T[],
  key: keyof T,
  maxSum: number,
): T[] {
  const combination: T[] = [];
  let remainingSum = maxSum;

  while (remainingSum > 0) {
    const item = getRandomItem(items, remainingSum, key);
    if (!item) break;

    const value = item[key] as number;
    combination.push(item);
    remainingSum -= value;
  }

  return combination;
}
