import { assertEquals } from "@std/assert";
import { parseData } from "./parser.ts";
import { countSafeReports } from "./count_safe_resports.ts";

Deno.test(async function shouldParseData() {
    const data = await Deno.readTextFile("example-data.txt")

    const result = parseData(data)

    assertEquals(result, [
        [7, 6, 4, 2, 1],
        [1, 2, 7, 8, 9],
        [9, 7, 6, 2, 1],
        [1, 3, 2, 4, 5],
        [8, 6, 4, 4, 1],
        [1, 3, 6, 7, 9],
    ]);
});

Deno.test(async function shouldCountSafeReports() {
    const data = await Deno.readTextFile("example-data.txt")

    const result = parseData(data)
    const safeReportCount = countSafeReports(result)

    assertEquals(safeReportCount, 2);
});