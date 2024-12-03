import { assertEquals } from "@std/assert";
import { parseData } from "./parser.ts";
import { calculateResultOfMultiplications } from "./calculator.ts";

Deno.test(async function shouldParseData() {
    const data = await Deno.readTextFile("public/example-data.txt")

    const result = parseData(data);

    assertEquals(result, [
        {
            x: 2,
            y: 4
        },
        {
            x: 8,
            y: 5
        },
    ])
});

Deno.test(async function shouldCalculateResultOfMultiplications() {
    const data = await Deno.readTextFile("public/example-data.txt")

    const muls = parseData(data);
    
    const result = calculateResultOfMultiplications(muls);

    assertEquals(result, 48)
});