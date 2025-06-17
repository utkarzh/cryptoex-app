export function formatCoinRate(value: number): string {
  if (value < 1 && value > 0) {
    // Convert exponential to full decimal string
    let fullDecimal = value.toFixed(20); // force full precision
    fullDecimal = fullDecimal.replace(/0+$/, ""); // remove trailing zeroes

    const str = fullDecimal.split(".")[1] || "";
    let firstNonZeroIndex = -1;

    // Find index of first non-zero digit after decimal
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== "0") {
        firstNonZeroIndex = i;
        break;
      }
    }

    if (firstNonZeroIndex === -1) return "0"; // All zeros

    const precision = firstNonZeroIndex + 4; // 1st non-zero + 2 more + 1 for rounding
    return value.toFixed(precision);
  }

  return value.toFixed(4); // For values >= 1
}
