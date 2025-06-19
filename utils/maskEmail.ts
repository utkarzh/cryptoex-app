export function maskEmail(email: string): string {
  const [username, domain] = email.split("@");
  if (!username || !domain) return email; // fallback if invalid format

  const visiblePart = username.slice(0, 3);
  return `${visiblePart}***@${domain}`;
}
