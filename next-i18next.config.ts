import { type UserConfig } from "next-i18next"
import { resolve } from "node:path"
export const config:UserConfig = {
  debug: process.env.NODE_ENV === 'development',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-CN','zh-TW','fr'],
  },
  localePath: typeof window === 'undefined'
    ? resolve('./src/locales/')
    : '/public/locales/',
} 