import { countXmas } from "./count_xmas.ts";
import { parseData } from "./parser.ts";

if (import.meta.main) main();

async function main() {
  const data = await Deno.readTextFile("public/data.txt");
  const matrix = parseData(data);
  const result = countXmas(matrix);

  console.log("RESULT:", result);
}
