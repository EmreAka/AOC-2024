function getLists(data: string) {
  const lists = data.split("\n").map((line) => line.split("   ").map(Number));
  return lists;
}

export function parseData(data: string) {
  const lists = getLists(data);

  const listOne = lists.map((list) => list[0]).sort();
  const listTwo = lists.map((list) => list[1]).sort();

  return {
    listOne,
    listTwo,
  };
}
