export default function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="9" height="28" rx="4" fill="#D4D4D4" />
      <rect x="15" y="2" width="15" height="12" rx="4" fill="#262626" />
      <rect x="15" y="18" width="15" height="12" rx="4" fill="#D4D4D4" />
    </svg>
  );
}
