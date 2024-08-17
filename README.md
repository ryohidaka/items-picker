# items-picker

[![NPM Version](https://img.shields.io/npm/v/items-picker?logo=npm)](https://www.npmjs.com/package/items-picker)
![build](https://github.com/ryohidaka/items-picker/workflows/Build/badge.svg)
[![codecov](https://codecov.io/gh/ryohidaka/items-picker/graph/badge.svg?token=RHP9TB2F51)](https://codecov.io/gh/ryohidaka/items-picker)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Overview

Get a random combination from a list of items.

## Installation

You can install this library using npm:

```shell
npm install items-picker
```

## Functions

### `getRandomCombination<T>(items: T[], key: keyof T, maxSum: number, allowDuplicates: boolean = true): T[]`

Retrieves a random combination of items from the provided array. The combination's sum is constrained to be less than or equal to maxSum. The function retrieves items until no more valid items can be found.

#### Parameters

| Parameter         | Type    | Description                                                            |
| ----------------- | ------- | ---------------------------------------------------------------------- |
| `items`           | T[]     | Array of items to select from.                                         |
| `key`             | keyof T | The key of the item object which has a numeric value.                  |
| `maxSum`          | number  | Maximum allowed sum of the values associated with the key.             |
| `allowDuplicates` | boolean | Flag indicating whether duplicate items are allowed. Defaults to true. |

#### Returns

An array containing the combination of items based on the constraints.

## Usage Example

```ts
import { getRandomCombination } from "random-item-picker";

const items = [
  { id: 1, value: 100 },
  { id: 2, value: 200 },
  { id: 3, value: 300 },
];

// Get a random combination of items with a total value of up to 500
const randomCombination = getRandomCombination(items, "value", 500, false);
console.log(randomCombination);
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
