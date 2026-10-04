import { profile } from "@/content/profile";

export type LogoVariant = "check" | "block" | "stack";

// 상단 로고. 모양은 content/profile.ts 의 logo 값("check" | "block" | "stack")으로 고릅니다.
export default function Logo({ variant = profile.logo }: { variant?: LogoVariant }) {
  if (variant === "stack") {
    return (
      <span className="logo">
        <svg width="34" height="34" viewBox="0 0 34 34" aria-hidden="true">
          <rect x="1" y="1" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" />
          <text x="17" y="15" textAnchor="middle" className="logo-stack">JI</text>
          <text x="17" y="28" textAnchor="middle" className="logo-stack">NI</text>
        </svg>
        <span className="sr-only">{profile.name}</span>
      </span>
    );
  }

  if (variant === "block") {
    return (
      <span className="logo">
        <svg width="26" height="26" viewBox="0 0 26 26" aria-hidden="true">
          <rect width="26" height="26" rx="6" fill="currentColor" />
          <text x="13" y="19" textAnchor="middle" className="logo-block">j</text>
        </svg>
        <span className="logo-word">{profile.name}</span>
      </span>
    );
  }

  return (
    <span className="logo">
      <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
        <rect x="1" y="1" width="20" height="20" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M6 11.5l3.2 3.2L16 7.8" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="logo-word">{profile.name}</span>
    </span>
  );
}
