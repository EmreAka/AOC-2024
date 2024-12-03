import type { Mul } from "./parser.ts";

export function calculateResultOfMultiplications(muls: Mul[]): number {
    return muls.reduce((prev, curr) => prev + (curr.x * curr.y),0)
}