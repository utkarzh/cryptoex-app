export function formatSmartNumber(num: number) {
  num = Number(num); // handle exponential or string input
  if (isNaN(num) || num < 0) return "Invalid input";

  if (num >= 1) {
    if (num >= 1_000_000_000) {
      return (num / 1_000_000_000).toFixed(2) + "B";
    } else if (num >= 1_000_000) {
      return (num / 1_000_000).toFixed(2) + "M";
    } else if (num >= 1_000) {
      return (num / 1_000).toFixed(2) + "K";
    } else {
      return num.toFixed(2);
    }
  } else {
    // Handle numbers less than 1
    const full = num.toPrecision(20); // Full decimal string, avoids scientific notation
    const [, decimal] = full.split(".");
    let firstNonZeroIndex = -1;

    // Find index of first non-zero digit after decimal
    for (let i = 0; i < decimal.length; i++) {
      if (decimal[i] !== "0") {
        firstNonZeroIndex = i;
        break;
      }
    }

    if (firstNonZeroIndex === -1) return "0"; // All zeros

    const precision = firstNonZeroIndex + 4; // 1st non-zero + 2 more + 1 for rounding
    return num.toFixed(precision);
  }
}
