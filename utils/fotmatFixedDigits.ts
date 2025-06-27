export function formatToMaxDigitsDecimal(
  value: number,
  maxDigits: number = 14
): string {
  if (value === 0) return "0";

  const absValue = Math.abs(value);
  const intPartLength =
    absValue >= 1 ? Math.floor(absValue).toString().length : 0;

  const decimalPlaces = maxDigits - intPartLength;

  // If integer part already exceeds or matches maxDigits, round to integer
  if (decimalPlaces <= 0) {
    return Math.round(value).toString();
  }

  // Round with fixed decimal places
  const rounded = value.toFixed(decimalPlaces);

  // Remove trailing zeros and optional dot
  //   return rounded.replace(/\.?0+$/, "");
  return rounded;
}
