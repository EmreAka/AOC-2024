export function countXmas(value: string[][]): number {
  let result = 0;

  for (let i = 1; i < value.length - 1; i++) {
    for (let j = 1; j < value[i].length - 1; j++) {
      const char = value[i][j];

      const [upLeft, upRight, bottomLeft, bottomRight] = [
        getDiagonalUpLeft({ row: i, col: j }, value),
        getDiagonalUpRight({ row: i, col: j }, value),
        getDiagonalBottomLeft({ row: i, col: j }, value),
        getDiagonalBottomRight({ row: i, col: j }, value),
      ];

      const one = `${upLeft}${char}${bottomRight}`;
      const oneReversed = `${bottomRight}${char}${upLeft}`;

      const two = `${bottomLeft}${char}${upRight}`;
      const twoReversed = `${upRight}${char}${bottomLeft}`;

      if (
        (one === "MAS" || oneReversed === "MAS") &&
        (two === "MAS" || twoReversed === "MAS")
      )
        result++;
    }
  }

  return result;
}

function getDiagonalUpLeft(
  { row, col }: { row: number; col: number },
  matrix: string[][]
) {
  if (row < 1 || col < 1) return "";

  const span = [matrix[row - 1][col - 1]];
  return span.toString().replaceAll(",", "");
}

function getDiagonalUpRight(
  { row, col }: { row: number; col: number },
  matrix: string[][]
) {
  if (row < 1 || col > matrix.length - 2) return "";

  const span = [matrix[row - 1][col + 1]];
  return span.toString().replaceAll(",", "");
}

function getDiagonalBottomLeft(
  { row, col }: { row: number; col: number },
  matrix: string[][]
) {
  if (row > matrix.length - 2 || col < 1) return "";

  const span = [matrix[row + 1][col - 1]];
  return span.toString().replaceAll(",", "");
}

function getDiagonalBottomRight(
  { row, col }: { row: number; col: number },
  matrix: string[][]
) {
  if (row > matrix.length - 2 || col > matrix.length - 2) return "";

  const span = [matrix[row + 1][col + 1]];
  return span.toString().replaceAll(",", "");
}
