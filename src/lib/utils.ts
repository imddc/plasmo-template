import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function injectMainStyles(cssText: string) {
  const style = document.createElement('style')
  style.textContent = cssText
  document.head.appendChild(style)
}
