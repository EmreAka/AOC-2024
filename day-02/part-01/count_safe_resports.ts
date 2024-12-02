function getTrendStats(report: number[]) {
	let trendStatus: "increasing" | "decreasing" | "stable" = "stable";

	if (report[0] > report[1]) trendStatus = "decreasing";
	else if (report[0] < report[1]) trendStatus = "increasing";
	else trendStatus = "stable";

	return {
		trendStatus,
		report,
	};
}

function checkIfReportFollowsTrend({
	trendStatus,
	report,
}: {
	trendStatus: "increasing" | "decreasing" | "stable";
	report: number[];
}): boolean {
	const result = report.map((report, index, reports) => {
		const prev = reports[index - 1];
		if (
			trendStatus === "increasing" &&
			index > 0 &&
			(prev === report || prev > report)
		) {
			return false;
		}
		if (
			trendStatus === "decreasing" &&
			index > 0 &&
			(prev === report || prev < report)
		) {
			return false;
		}

		return true;
	});

	return result.every((item) => item);
}

function checkIfLevelsWithinRange({
	report,
}: {
	trendStatus: "increasing" | "decreasing" | "stable";
	report: number[];
}): boolean {
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
		.map(getTrendStats)
		.filter((report) => report.trendStatus !== "stable")
		.filter(checkIfReportFollowsTrend)
		.filter(checkIfLevelsWithinRange)
		.reduce((prev) => prev + 1, 0);

	return result;
}
