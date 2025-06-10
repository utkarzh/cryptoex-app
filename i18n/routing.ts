export const localeObjects = [
  {code: 'en', label: 'English (EN)'},
  {code: 'fr', label: 'Français (FR)'},
  {code: 'hi', label: 'हिन्दी (hi)'},
  {code: 'nl', label: 'Dutch (nl)'},
  {code: 'ko', label: '한국인 (ko)'},
  {code: 'ru', label: 'русский (ru)'},
  {code: 'ch', label: '中国人 (ch)'},
  {code: 'tw', label: '中國人 (tw)'},
  {code: 'it', label: 'italiano (it)'},
];

export const defaultLocale = 'en';

export const routing = {
  locales: localeObjects.map((l) => l.code),
  defaultLocale
};