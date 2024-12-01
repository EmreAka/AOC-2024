import { assertEquals } from "@std/assert";
import { doTheJob } from "./main.ts";
import { parseData } from "./parser.ts";

Deno.test(async function shouldFindOccurrences() {
  const text = await Deno.readTextFile("data.txt");

  const data = parseData(text);

  const result = doTheJob(data);

  assertEquals(result, 23384288);
});

Deno.bench({
  name: "Should Find Occurences",
  async fn() {
    const text = await Deno.readTextFile("data.txt");

    const data = parseData(text);

    const result = doTheJob(data);

    assertEquals(result, 23384288);
  },
});
