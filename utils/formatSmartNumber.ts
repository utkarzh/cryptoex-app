// export function formatSmartNumber(num: number) {
//   num = Number(num); // handle exponential or string input
//   if (isNaN(num) || num < 0) return "Invalid input";

//   if (num >= 1) {
//     if (num >= 1_000_000_000) {
//       return (num / 1_000_000_000).toFixed(2) + "B";
//     } else if (num >= 1_000_000) {
//       return (num / 1_000_000).toFixed(2) + "M";
//     } else if (num >= 1_000) {
//       return (num / 1_000).toFixed(2) + "K";
//     } else {
//       return num.toFixed(2);
//     }
//   } else {
//     const str = num.toExponential(20); // Full precision
//     const decStr = Number(str).toFixed(20); // Convert to decimal string
//     const [, decimalPart] = decStr.split(".");
//     const prefix = "0.";
//     let result = "";
//     let foundFirstNonZero = false;
//     let nonZeroCount = 0;

//     for (let i = 0; i < decimalPart.length; i++) {
//       const digit = decimalPart[i];
//       if (!foundFirstNonZero) {
//         if (digit === "0") {
//           result += "0";
//         } else {
//           foundFirstNonZero = true;
//           result += digit;
//           nonZeroCount = 1;
//         }
//       } else {
//         if (nonZeroCount < 2) {
//           result += digit;
//           if (digit !== "0") nonZeroCount++;
//         } else {
//           // Round last digit
//           const numStr = "0." + result + decimalPart[i];
//           return Number(numStr).toPrecision(result.length + 1);
//         }
//       }
//     }

//     return prefix + result;
//   }
// }

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
    // const result = "0.";
    // let foundNonZero = false;
    // let nonZeroDigits = "";

    // for (let i = 0; i < decimal.length; i++) {
    //   const digit = decimal[i];
    //   if (!foundNonZero) {
    //     result += digit;
    //     if (digit !== "0") {
    //       foundNonZero = true;
    //       nonZeroDigits += digit;
    //     }
    //   } else if (nonZeroDigits.length < 2) {
    //     nonZeroDigits += digit;
    //   } else {
    //     // We now have more than 2 digits: round
    //     const toRound = Number("0." + result.slice(2) + nonZeroDigits + digit);
    //     return toRound.toPrecision(result.length - 2 + 2); // keep up to two non-zero digits
    //   }
    // }
    // return result + nonZeroDigits;

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
