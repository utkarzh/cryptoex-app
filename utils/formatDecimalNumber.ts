export function formatDecimalNumber(value: number): string {
  // Convert exponential to full decimal
  const fullStr = value.toString().includes("e")
    ? value.toFixed(20).replace(/0+$/, "") // remove trailing zeros
    : value.toString();

  const [integerPart, decimalPart] = fullStr.split(".");

  if (!decimalPart || decimalPart.length <= 9) {
    return fullStr; // No formatting needed
  }

  const firstThree = decimalPart.slice(0, 3);
  const lastThree = decimalPart.slice(-3);

  return `${integerPart}.${firstThree}...${lastThree}`;
}
