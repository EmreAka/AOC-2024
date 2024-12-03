export type Mul = {
  x: number;
  y: number;
};

export function parseData(data: string): Mul[] {
  const muls: Mul[] = [];

  let flag = true
  let startIndex = 0
  let endIndex = 0

  for (let index = 0; index < data.length; index++) {
    const start = data.substring(index, index + 4);

    if (start !== "mul(") continue;
    const end = data.substring(index + 4, index + 4 + 8);
    const fullString = start + end;
    const mulString = fullString.substring(0, fullString.indexOf(")") + 1);

    if (!mulString.endsWith(")")) continue;

    const firstDigitStr = mulString.substring(4, mulString.indexOf(","));
    const secondDigit = mulString.substring(
      mulString.indexOf(",") + 1,
      mulString.length - 1
    );

    if (isNaN(parseInt(firstDigitStr)) || isNaN(parseInt(secondDigit))) continue;

    startIndex = endIndex;
    endIndex = index;
    const stringBeforeMulstring = data.substring(startIndex, endIndex)
    if (stringBeforeMulstring.lastIndexOf("don't()") > stringBeforeMulstring.lastIndexOf("do()")) flag = false
    if (stringBeforeMulstring.lastIndexOf("do()") > stringBeforeMulstring.lastIndexOf("don't()") ) flag = true
    
    if(!flag) continue;

    muls.push({ x: +firstDigitStr, y: +secondDigit });
  }

  return muls;
}
