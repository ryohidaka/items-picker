import { getRandomCombination } from "..";

const items = [
  { id: 1, value: 100 },
  { id: 2, value: 200 },
  { id: 3, value: 300 },
  { id: 4, value: 400 },
  { id: 5, value: 500 },
];

const result = getRandomCombination(items, "value", 1000);
console.log(result);
