import { parseData } from "./parser.ts";

if (import.meta.main) main();

async function main() {
  const text = await Deno.readTextFile("data.txt");

  const data = parseData(text);

  const result = doTheJob(data);

  console.log(result);
}

function countAdjacentDuplicates(value: {
  index: number;
  value: number;
  list: number[];
}) {
  let count = 1;

  for (let i = value.index - 1; i >= 0; i--) {
    const compareValue = value.list[i];
    if (value.value === compareValue) count++;
    else break;
  }

  for (let i = value.index + 1; i < value.list.length; i++) {
    const compareValue = value.list[i];
    if (value.value === compareValue) count++;
    else break;
  }

  return {
    value: value.value,
    count: count,
  };
}

export function doTheJob(data: ReturnType<typeof parseData>) {
  const occurences = data.listOne
    .map((item) => binarySearch(data.listTwo, item))
    .filter((index) => index >= 0)
    .map((index) => ({
      index: index,
      value: data.listTwo[index],
      list: data.listTwo,
    }))
    .map(countAdjacentDuplicates)
    .reduce((prev, curr) => prev + curr.count * curr.value, 0);

  return occurences;
}

function binarySearch(list: number[], search: number): number {
  let left = 0;
  let right = list.length - 1;

  while (left <= right) {
    const midIndex = Math.floor(left + (right - left) / 2);
    const midValue = list[midIndex];

    if (midValue === search) return midIndex;
    if (midValue > search) right = midIndex - 1;
    else left = midIndex + 1;
  }

  return -1;
}
