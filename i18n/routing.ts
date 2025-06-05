export const localeObjects = [
  {code: 'en', label: 'English (EN)'},
  {code: 'fr', label: 'Français (FR)'}
];

export const defaultLocale = 'en';

export const routing = {
  locales: localeObjects.map((l) => l.code),
  defaultLocale
};