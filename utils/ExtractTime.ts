export function extractTime(isoString: string): string {
  //   const date = new Date(isoString);

  //   const hours = String(date.getHours()).padStart(2, "0");
  //   const minutes = String(date.getMinutes()).padStart(2, "0");
  //   const seconds = String(date.getSeconds()).padStart(2, "0");

  //   return `${hours}:${minutes}:${seconds}`;

  return isoString.substring(11, 19);
}
