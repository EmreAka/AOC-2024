import { assertEquals } from "@std/assert";
import { doTheJob, parseData } from "./main.ts";

Deno.test(async function shouldCalculateDifferences() {
  const text = await Deno.readTextFile("example-data.txt");

  const data = parseData(text);

  const result = doTheJob(data);
  
  assertEquals(result, 11);
});
