import { assertEquals } from "@std/assert";
import { parseData } from "./parser.ts";
import { countSafeReports } from "./count_safe_reports.ts";

Deno.test(async function shouldParseData() {
  const data = await Deno.readTextFile("public/example-data.txt");

  const result = parseData(data);

  assertEquals(result, [
    [7, 6, 4, 2, 1],
    [1, 2, 7, 8, 9],
    [9, 7, 6, 2, 1],
    [1, 3, 2, 4, 5],
    [8, 6, 4, 4, 1],
    [1, 3, 6, 7, 9],
  ]);
});

Deno.test(async function shouldCountSafeReportsRealData() {
  const data = parseData(await Deno.readTextFile("public/data.txt"));

  const safeReportCount = countSafeReports(data);

  assertEquals(safeReportCount, 455);
});

Deno.test(async function shouldCountSafeReportsExampleData() {
  const data = parseData(await Deno.readTextFile("public/example-data.txt"));

  const safeReportCount = countSafeReports(data);

  assertEquals(safeReportCount, 4);
});

Deno.test(function shouldCountSafeReportsEdgeCase() {
  const data = [
    [1, 2, 3, 4, 5],
    [1, 2, 1, 4, 5],
  ];

  const safeReportCount = countSafeReports(data);

  assertEquals(safeReportCount, 2);
});

Deno.bench({
  name: "Should Count Safe Reports",
  async fn() {
    const file = await Deno.readTextFile("public/data.txt");

    const data = parseData(file);

    const safeReportCount = countSafeReports(data);

    assertEquals(safeReportCount, 455);
  },
});
