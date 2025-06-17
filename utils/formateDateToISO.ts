export function formatDateToISO(input: string): string {
  const [day, month, year] = input.split("-");
  return `${year}-${month}-${day}`;
}
