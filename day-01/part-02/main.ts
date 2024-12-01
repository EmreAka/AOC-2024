import { parseData } from "./parser.ts";

if (import.meta.main) main();

async function main() {
  const text = await Deno.readTextFile("data.txt");

  const data = parseData(text);

  const result = doTheJob(data);

  console.log(result);
}

export function doTheJob(data: ReturnType<typeof parseData>) {
  let total = 0;

  for (const number of data.listOne) {
    const searchList = data.listTwo;
    
    const index = binarySearch(searchList, number);
    if (index < 0) continue;

    const value = searchList[index];
    let count = 1;

    for (let i = index - 1; i >= 0; i--) {
      const compareValue = searchList[i];
      if (value === compareValue) count++;
      else break;
    }

    for (let i = index + 1; i < searchList.length; i++) {
      const compareValue = searchList[i];
      if (value === compareValue) count++;
      else break;
    }

    total += count * number;

    /* const occurences =
      data.listTwo.filter((item) => item === number).length * number;
    total += occurences; */
  }

  return total;
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
