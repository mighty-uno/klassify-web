type BeeProps = {
  className?: string;
  queen?: boolean;
};

export function Bee({ className, queen = false }: BeeProps) {
  return (
    <svg
      viewBox="0 0 64 48"
      className={className}
      aria-hidden
      focusable="false"
    >
      <g className="bee-wings">
        <ellipse
          cx="25"
          cy="12"
          rx="9.5"
          ry="5.5"
          fill="rgba(255,255,255,0.55)"
          stroke="rgba(255,255,255,0.7)"
          strokeWidth="1"
          transform="rotate(-22 25 12)"
        />
        <ellipse
          cx="37"
          cy="11"
          rx="9.5"
          ry="5.5"
          fill="rgba(255,255,255,0.55)"
          stroke="rgba(255,255,255,0.7)"
          strokeWidth="1"
          transform="rotate(22 37 11)"
        />
      </g>

      {queen && (
        <path
          d="M40.5 14.5 l1.6 -4.2 l2.1 2.7 l2 -3.7 l2 3.7 l2.1 -2.7 l1.6 4.2 Z"
          fill="#ffb800"
          stroke="#14162b"
          strokeWidth="0.8"
          strokeLinejoin="round"
        />
      )}

      <path
        d="M44.5 21.5 q-3 -5.5 0.5 -8.5"
        stroke="#14162b"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M48.5 21.5 q3 -5.5 -0.5 -8.5"
        stroke="#14162b"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />

      <path d="M8.5 27.5 L3 29 L8.5 30.5 Z" fill="#14162b" />

      <rect
        x="8"
        y="17"
        width="34"
        height="22"
        rx="11"
        fill="#ffc93c"
        stroke="#14162b"
        strokeWidth="1.6"
      />
      <rect x="19" y="16.4" width="5" height="23.2" fill="#14162b" />
      <rect x="28" y="16.4" width="5" height="23.2" fill="#14162b" />

      <circle
        cx="45"
        cy="28"
        r="7.5"
        fill="#ffc93c"
        stroke="#14162b"
        strokeWidth="1.6"
      />
      <circle cx="47.5" cy="26" r="2" fill="#14162b" />

      <path
        d="M20 38.5 v3.5 M28 38.5 v3.5 M36 38.5 v3.5"
        stroke="#14162b"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
