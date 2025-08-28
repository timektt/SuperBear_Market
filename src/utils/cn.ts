export function cn(...cls: (string | false | undefined)[]): string {
  return cls.filter(Boolean).join(" ");
}