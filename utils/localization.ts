import type { LocalizedString } from '../types';

export const t = (localizedString: LocalizedString | undefined, lang: 'he' | 'en'): string => {
  if (!localizedString) {
    return '';
  }
  if (typeof localizedString === 'string') {
    return localizedString;
  }
  if (typeof localizedString === 'object' && localizedString !== null) {
    return localizedString[lang] || localizedString['he'] || ''; // Fallback to Hebrew then empty string
  }
  return ''; // Fallback for other unexpected types
};