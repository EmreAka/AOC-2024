import { calculateResultOfMultiplications } from "./calculator.ts";
import { parseData, type Mul } from "./parser.ts";

if (import.meta.main) main();

async function main() {
  const data = await Deno.readTextFile("public/data.txt");
  const muls: Mul[] = parseData(data);
  const result = calculateResultOfMultiplications(muls);

  console.log("Result.", result);
}
