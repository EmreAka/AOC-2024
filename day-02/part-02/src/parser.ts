export function parseData(input: string) {
    return input.split('\n').map((line) => line.split(' ').map(Number))
}