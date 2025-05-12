export const locales = ['ko', 'ja'] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'ko'

export const messages = {
  ko: () => import('../messages/ko.json').then((module) => module.default),
  ja: () => import('../messages/ja.json').then((module) => module.default),
} 