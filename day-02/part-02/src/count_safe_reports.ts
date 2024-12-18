function checkIfReportIsSafe(report: number[]) {
  let isSafe = true;

  // decrease
  for (let index = 1; index < report.length; index++) {
    const curr = report[index];
    const prev = report[index - 1];
    const diff = Math.abs(prev - curr);

    //unsafe
    if (prev === curr || prev < curr || diff < 1 || diff > 3) isSafe = false;
  }

  if (isSafe) return true;

  // because is set false in the above loop,
  // we reset the state
  isSafe = true;

  // increase
  for (let index = 1; index < report.length; index++) {
    const curr = report[index];
    const prev = report[index - 1];
    const diff = Math.abs(prev - curr);

    //unsafe
    if (prev === curr || prev > curr || diff < 1 || diff > 3) isSafe = false;
  }

  if (isSafe) return true;

  return false;
}

export function countSafeReports(reports: number[][]) {
  let result = 0;

  for (const report of reports) {
    const isSafe = checkIfReportIsSafe(report);
    if (isSafe) result++;
    else {
      for (let index = 0; index < report.length; index++) {
        const newReport = [...report];
        newReport.splice(index, 1);
        const isSafe = checkIfReportIsSafe(newReport);

        if (isSafe) {
          result++;
          break;
        }
      }
    }
  }

  return result;
}
