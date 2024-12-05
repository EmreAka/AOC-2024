import { assertEquals } from "@std/assert";
import { parseData } from "./parser.ts";
import { countXmas } from "./count_xmas.ts";

Deno.test(async function shouldParseData() {
  const data = await Deno.readTextFile("public/example-data.txt");

  const result = parseData(data);

  assertEquals(result, [
    ["M", "M", "M", "S", "X", "X", "M", "A", "S", "M"], // 0
    ["M", "S", "A", "M", "X", "M", "S", "M", "S", "A"], // 1
    ["A", "M", "X", "S", "X", "M", "A", "A", "M", "M"], // 2
    ["M", "S", "A", "M", "A", "S", "M", "S", "M", "X"], // 3
    ["X", "M", "A", "S", "A", "M", "X", "A", "M", "M"], // 4
    ["X", "X", "A", "M", "M", "X", "X", "A", "M", "A"], // 5
    ["S", "M", "S", "M", "S", "A", "S", "X", "S", "S"], // 6
    ["S", "A", "X", "A", "M", "A", "S", "A", "A", "A"], // 7
    ["M", "A", "M", "M", "M", "X", "M", "M", "M", "M"], // 8
    ["M", "X", "M", "X", "A", "X", "M", "A", "S", "X"], // 9
  ]);
});

Deno.test(async function shouldCountXmas() {
  const data = await Deno.readTextFile("public/example-data.txt");

  const result = parseData(data);

  const count = countXmas(result);

  assertEquals(count, 9);
});
