/**
 * Impact stats — used numbers only from resume/live site. Keep in sync with profile.ts copy.
 */

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 12, suffix: "+", label: "Years experience" },
  { value: 28, suffix: "+", label: "Apps on the App Store" },
  { value: 5, suffix: "K+", label: "Field users on live tracking" },
  { value: 1, suffix: "K+", label: "Concurrent streaming users" },
  { value: 30, suffix: "%", label: "Crash reduction" },
  { value: 25, suffix: "%", label: "API latency reduction" },
];
