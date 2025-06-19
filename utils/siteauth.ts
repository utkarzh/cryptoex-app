import CryptoJS from "crypto-js";

function sortObject(obj: object): object {
  return JSON.parse(JSON.stringify(obj, Object.keys(obj).sort()));
}

export function generateSiteAuthCode(payload: object): string {
  const sortedPayload = sortObject(payload);
  const str = encodeURIComponent(JSON.stringify(sortedPayload));
  const hash = CryptoJS.HmacSHA512(str, "");
  return hash.toString(CryptoJS.enc.Hex);
}

export function generateCaptchacode(payload: string): string {
  // const sortedPayload = sortObject({ payload });
  const str = encodeURIComponent(payload);
  const hash = CryptoJS.HmacSHA512(str, "");
  return hash.toString(CryptoJS.enc.Hex);
}
