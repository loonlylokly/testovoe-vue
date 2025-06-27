export function remToPx(rem: number): number {
  return Math.round(rem * Number.parseFloat(getComputedStyle(document.documentElement).fontSize))
}
