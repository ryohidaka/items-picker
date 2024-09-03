/**
 * Generates a random item from the provided array, constrained by a maximum value,
 * ensuring the item has not been used before.
 *
 * @param items - Array of items to select from.
 * @param maxSum - Maximum allowed value for the selected item.
 * @param key - The key of the item object which has a numeric value.
 * @param usedIndices - Set of indices of already used items.
 * @returns A randomly selected item that fits within the maxSum, or undefined if none found.
 */
function getRandomItem<T>(
  items: T[],
  maxSum: number,
  key: keyof T,
  usedIndices: Set<number>,
): T | undefined {
  const filteredItems = items.filter((item, index) => {
    const value = item[key];
    return (
      typeof value === "number" && value <= maxSum && !usedIndices.has(index)
    );
  });

  if (filteredItems.length === 0) return undefined;

  const randomIndex = Math.floor(Math.random() * filteredItems.length);
  usedIndices.add(items.indexOf(filteredItems[randomIndex]));

  return filteredItems[randomIndex];
}

/**
 * Retrieves a random combination of items from the provided array.
 * The combination's sum is constrained to be less than or equal to `maxSum`.
 * The function retrieves items until no more valid items can be found or
 * remainingSum no longer changes.
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
  allowDuplicates: boolean = true,
): T[] {
  const combination: T[] = [];
  let remainingSum = maxSum;
  const usedIndices = new Set<number>();

  while (remainingSum > 0) {
    const item = getRandomItem(items, remainingSum, key, usedIndices);
    if (!item) break;

    const value = item[key] as number;
    combination.push(item);
    remainingSum -= value;

    if (!allowDuplicates) {
      usedIndices.add(items.indexOf(item));
    }

    // If remainingSum does not change, break to prevent infinite loop
    if (remainingSum >= maxSum) break;
  }

  return combination;
}
