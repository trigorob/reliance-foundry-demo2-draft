
// NOTE: 
// Original Formulas and Procedures here:
// http://www.learnbymarketing.com/tutorials/linear-regression-by-hand-in-excel/
// https://www.statisticshowto.com/probability-and-statistics/regression-analysis/find-a-linear-regression-equation/



// Calculates SLOPE of Linear Regression Line of Best Fit,
//	given list of features (x) and list of outcome data (y)
// Best used for arg m from fit()
// fit() is based on a Linear Regression Line of Best Fit
function getM(xArray, yArray) {
	const xSum = xArray.reduce((a, b) => a + b);
	const xAvg = xSum / xArray.length;
	const xDiffs = xArray.map((x) => xAvg - x);
	const xDiffSq = xDiffs.map((x) => x^2)
	const xDiffSqSum = xDiffSq.reduce((a, b) => a + b);

	const ySum = yArray.reduce((a, b) => a + b);
	const yAvg = ySum / yArray.length;
	const yDiffs = yArray.map((y) => yAvg - y);
	const xyDiffs = xDiffs.map((x, i) => x * yDiffs[i]);
	const xyDiffsSum = xyDiffs.reduce((a, b) => a + b);

	return xyDiffsSum / xDiffSqSum;
}

// Calculates BASE (Y-Intercept) of Linear Regression Line of Best Fit,
//	given list of features (x), list of outcome data (y), 
//	and SLOPE from getM()
// Best used for arg m from fit()
// fit() is based on a Linear Regression Line of Best Fit
// MATH NOTE: YEAR (X) NEVER REACHES ZERO!
function getB(xArray, yArray, m) {
	const xSum = xArray.reduce((a, b) => a + b);
	const xAvg = xSum / xArray.length;

	const ySum = yArray.reduce((a, b) => a + b);
	const yAvg = ySum / yArray.length;	

	return yAvg - (m * xAvg);
	//return (m * xAvg) + (yAvg - yAvg);
}


// Returns an array of predictions, given a feature array.
// fit() is based on a Linear Regression Line of Best Fit
function fit(array, m, b) {return array.map((x) => ((x * m) + b))}

 
export {
	getB,
	fit,
	getM
}
