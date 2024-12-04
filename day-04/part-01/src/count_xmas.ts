export function countXmas(value: string[][]): number {
	let result = 0;
    const matixLength = value[0].length;

	for (let i = 0; i < matixLength; i++) {
        for(let j = 0; j < matixLength; j++) {
            const char = value[i][j]

            if (char !== 'X') continue

            result++

            const left = getHorizantalLeft(j, value[i])
            const right = getHorizantalRight(j, value[i])
            const up = getVerticalUp({row: i, col: j}, value)
            const down = getVerticalDown({row: i, col: j}, value)
            console.log("left:", left, "right:", right, "up:", up, "down:", down)
        }
    }

	return result;
}

function getHorizantalLeft(startIndex: number, chars: string[]) {
    const span = chars.slice(startIndex - 3,startIndex + 1).reverse()
    return span.toString().replaceAll(',', '')
}

function getHorizantalRight(startIndex: number, chars: string[]) {
    const span = chars.slice(startIndex, startIndex + 4)
    return span.toString().replaceAll(',', '')
}

function getVerticalUp({row, col}: {row: number, col: number}, matrix: string[][]) {
    if (row < 3) return ''

    const span = [matrix[row][col], matrix[row - 1][col], matrix[row - 2][col], matrix[row - 3][col]]
    return span.toString().replaceAll(',', '')
}

function getVerticalDown({row, col}: {row: number, col: number}, matrix: string[][]) {
    if (row < matrix.length - 3) return ''

    const span = [matrix[row][col], matrix[row - 1][col], matrix[row - 2][col], matrix[row - 3][col]]
    return span.toString().replaceAll(',', '')
}