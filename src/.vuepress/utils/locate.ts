export type SupportedLocale = 'zh-CN' | 'en-US';

let currentLocale: SupportedLocale = 'zh-CN';

export function setLocale(locale: SupportedLocale) {
  currentLocale = locale;
}

export function getLocale() {
  return currentLocale;
}

export function t<T extends { 'zh-CN': string; 'en-US': string }>(
  text: T
): string {
  return text[currentLocale] || text['zh-CN'];
}

// 数组版本：处理 achievements 这类多语言字符串数组
export function tArray<T extends { 'zh-CN': string; 'en-US': string }>(texts: T[]): string[] {
  return texts.map(item => t(item));
}