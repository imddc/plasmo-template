import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * @description 为了给shadcn注入样式
 * @param cssText
 */
export function injectMainStyles(cssText: string) {
  const style = document.createElement('style')
  style.textContent = cssText
  document.head.appendChild(style)
}
