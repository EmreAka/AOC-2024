if (import.meta.main) main();

async function main() {
  const text = await Deno.readTextFile("data.txt");

  const data = parseData(text);

  const result = doTheJob(data);

  console.log(result);
}

export function parseData(data: string) {
  const lists = data.split("\n").map((line) => line.split("   ").map(Number));

  const listOne = lists.map((list) => list[0]).sort();
  const listTwo = lists.map((list) => list[1]).sort();

  return {
    listOne,
    listTwo,
  };
}

export function doTheJob(data: ReturnType<typeof parseData>) {
  return data.listOne
    .map((a, i) => Math.abs(a - data.listTwo[i]))
    .reduce((acc, curr) => acc + curr, 0);
}
