function checkIfReportFollowsTrend(report: number[]): boolean {
  const [first, second] = report;

  if (first > second) {
    for (let index = 0; index < report.length; index++) {
      const prev = report[index - 1];
      const curr = report[index];

      if (index > 0 && (prev === curr || prev < curr)) return false;
    }
  }
  if (first < second) {
    for (let index = 0; index < report.length; index++) {
      const prev = report[index - 1];
      const curr = report[index];

      if (index > 0 && (prev === curr || prev > curr)) return false;
    }
  }

  return true;
}

function checkIfLevelsWithinRange(report: number[]): boolean {
  for (let index = 1; index < report.length; index++) {
    const prev = report[index - 1];
    const curr = report[index];

    const diff = Math.abs(prev - curr);

    if (diff < 1 || diff > 3) return false;
  }

  return true;
}

export function countSafeReports(reports: number[][]) {
  const result = reports
    .filter(checkIfReportFollowsTrend)
    .filter(checkIfLevelsWithinRange)
    .reduce((prev) => prev + 1, 0);

  return result;
}
