if (import.meta.main) main();

async function main() {
  const text = await Deno.readTextFile("example-data.txt");

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
  const list = [];

  for (let i = 0; i < data.listOne.length; i++) {
    const itemOne = data.listOne[i];
    const itemTwo = data.listTwo[i];

    if (itemOne > itemTwo) list.push(itemOne - itemTwo);
    else list.push(itemTwo - itemOne);
  }

  return list.reduce((acc, curr) => acc + curr, 0);
}
