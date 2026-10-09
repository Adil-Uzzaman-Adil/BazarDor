const bnDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

export function toBn(value: number | string): string {
  return String(value).replace(/\d/g, (d) => bnDigits[+d]);
}

export function toBnPrice(value: number): string {
  const formatted = value.toLocaleString("en-IN");
  return toBn(formatted);
}

export function cn(...classes: (string | undefined | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function formatChange(change: number): string {
  if (change === 0) return `—${toBn("0.0")}%`;
  const sign = change > 0 ? "▲" : "▼";
  return `${sign} ${toBn(Math.abs(change).toFixed(1))}%`;
}