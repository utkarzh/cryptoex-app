export const getStatus = (startDays: string, endDays: string) => {
  const start = Number(startDays);
  const end = Number(endDays);
  if (start > 0 && end > 0) {
    return "upcoming";
  } else if (start < 0 && end > 0) {
    return "ongoing";
  } else if (start < 0 && end < 0) {
    return "completed";
  } else {
    return "";
  }
};
