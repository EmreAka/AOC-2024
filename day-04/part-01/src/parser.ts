export function parseData(data: string) : string[][]{
    const result: string[][] = data.split('\n')
        .map(col => col.trim().split(''))

    return result
}