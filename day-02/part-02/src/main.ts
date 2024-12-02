import { countSafeReports } from "./count_safe_reports.ts";
import { parseData } from "./parser.ts";

if (import.meta.main) main();

async function main() {
    const data = await Deno.readTextFile("public/data.txt");

	const result = parseData(data);
	const safeReportCount = countSafeReports(result);

	console.log(safeReportCount);
}
