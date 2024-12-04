export function countXmas(value: string[][]): number {
  let result = 0;

  for (let i = 0; i < value.length; i++) {
    for (let j = 0; j < value[i].length; j++) {
      const char = value[i][j];

      if (char !== "X") continue;

      const operations = [
        getHorizantalLeft(j, value[i]),
        getHorizantalRight(j, value[i]),
        getVerticalUp({ row: i, col: j }, value),
        getVerticalDown({ row: i, col: j }, value),
        getDiagonalUpLeft({ row: i, col: j }, value),
        getDiagonalUpRight({ row: i, col: j }, value),
        getDiagonalBottomLeft({ row: i, col: j }, value),
        getDiagonalBottomRight({ row: i, col: j }, value),
      ];

      operations.forEach((span) => {
        if (span === "XMAS") result++;
      });
    }
  }

  return result;
}

function getHorizantalLeft(startIndex: number, chars: string[]) {
  const span = chars.slice(startIndex - 3, startIndex + 1).reverse();
  return span.toString().replaceAll(",", "");
}

function getHorizantalRight(startIndex: number, chars: string[]) {
  const span = chars.slice(startIndex, startIndex + 4);
  return span.toString().replaceAll(",", "");
}

function getVerticalUp(
  { row, col }: { row: number; col: number },
  matrix: string[][]
) {
  if (row < 3) return "";

  const span = [
    matrix[row][col],
    matrix[row - 1][col],
    matrix[row - 2][col],
    matrix[row - 3][col],
  ];
  return span.toString().replaceAll(",", "");
}

function getVerticalDown(
  { row, col }: { row: number; col: number },
  matrix: string[][]
) {
  if (row > matrix.length - 4) return "";

  const span = [
    matrix[row][col],
    matrix[row + 1][col],
    matrix[row + 2][col],
    matrix[row + 3][col],
  ];
  return span.toString().replaceAll(",", "");
}

function getDiagonalUpLeft(
  { row, col }: { row: number; col: number },
  matrix: string[][]
) {
  if (row < 3 || col < 3) return "";

  const span = [
    matrix[row][col],
    matrix[row - 1][col - 1],
    matrix[row - 2][col - 2],
    matrix[row - 3][col - 3],
  ];
  return span.toString().replaceAll(",", "");
}

function getDiagonalUpRight(
  { row, col }: { row: number; col: number },
  matrix: string[][]
) {
  if (row < 3 || col > matrix.length - 4) return "";

  const span = [
    matrix[row][col],
    matrix[row - 1][col + 1],
    matrix[row - 2][col + 2],
    matrix[row - 3][col + 3],
  ];
  return span.toString().replaceAll(",", "");
}

function getDiagonalBottomLeft(
  { row, col }: { row: number; col: number },
  matrix: string[][]
) {
  if (row > matrix.length - 4 || col < 3) return "";

  const span = [
    matrix[row][col],
    matrix[row + 1][col - 1],
    matrix[row + 2][col - 2],
    matrix[row + 3][col - 3],
  ];
  return span.toString().replaceAll(",", "");
}

function getDiagonalBottomRight(
  { row, col }: { row: number; col: number },
  matrix: string[][]
) {
  if (row > matrix.length - 4 || col > matrix.length - 4) return "";

  const span = [
    matrix[row][col],
    matrix[row + 1][col + 1],
    matrix[row + 2][col + 2],
    matrix[row + 3][col + 3],
  ];
  return span.toString().replaceAll(",", "");
}
