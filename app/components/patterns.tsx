/**
 * Inline SVG pattern artwork. No external images, so nothing can 404 and no
 * remote-image config is needed in `next.config.ts`.
 */

const panelPalettes = [
  { base: "#6a0dad", accent: "#e6a817", detail: "#8f00ff" },
  { base: "#014d4e", accent: "#c1440e", detail: "#e6a817" },
  { base: "#c1440e", accent: "#6a0dad", detail: "#ffbf00" },
  { base: "#8f00ff", accent: "#014d4e", detail: "#c2b280" },
];

/** Alternating tribal geometry panel used beside each project. */
export function TribalPanel({
  variant,
  label,
}: {
  variant: number;
  label: string;
}) {
  const palette = panelPalettes[variant % panelPalettes.length];
  const gradientId = `tribal-gradient-${variant}`;
  const patternId = `tribal-pattern-${variant}`;

  return (
    <svg
      viewBox="0 0 480 360"
      role="img"
      aria-label={label}
      className="h-full w-full"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={palette.base} stopOpacity="0.9" />
          <stop offset="100%" stopColor="#0d0d0d" stopOpacity="0.98" />
        </linearGradient>

        <pattern
          id={patternId}
          width="48"
          height="48"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M0 48 24 14 48 48"
            fill="none"
            stroke={palette.accent}
            strokeOpacity="0.4"
            strokeWidth="1.5"
          />
          <circle
            cx="24"
            cy="14"
            r="2"
            fill={palette.detail}
            fillOpacity="0.6"
          />
        </pattern>
      </defs>

      <rect width="480" height="360" fill={`url(#${gradientId})`} />
      <rect width="480" height="360" fill={`url(#${patternId})`} />

      <g fill="none" stroke={palette.detail} strokeOpacity="0.45">
        <circle cx="374" cy="296" r="150" strokeWidth="1.5" />
        <circle cx="374" cy="296" r="108" strokeWidth="1.5" />
        <circle cx="374" cy="296" r="66" strokeWidth="1.5" />
      </g>

      <path
        d="M0 58 40 28 80 58 120 28 160 58 200 28 240 58 280 28 320 58 360 28 400 58 440 28 480 58"
        fill="none"
        stroke={palette.accent}
        strokeOpacity="0.75"
        strokeWidth="2"
      />

      <text
        x="34"
        y="318"
        className="font-mono"
        fontSize="74"
        fontWeight="500"
        fill="#f6f1e7"
        fillOpacity="0.16"
      >
        {String(variant + 1).padStart(2, "0")}
      </text>
    </svg>
  );
}

/**
 * Holographic mask for the hero: radial symmetry, ancestral geometry and a
 * metallic core. Layers spin and breathe via the wrapper in `Hero`.
 */
export function HoloMask() {
  const ticks = Array.from({ length: 24 }, (_, index) => index * 15);
  const spokes = Array.from({ length: 8 }, (_, index) => index * 45);

  return (
    <svg
      viewBox="0 0 400 400"
      aria-hidden="true"
      className="h-full w-full overflow-visible"
    >
      <defs>
        <radialGradient id="holo-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffbf00" stopOpacity="0.95" />
          <stop offset="45%" stopColor="#e6a817" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#8f00ff" stopOpacity="0.05" />
        </radialGradient>
        <linearGradient id="holo-rim" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e6a817" />
          <stop offset="55%" stopColor="#8f00ff" />
          <stop offset="100%" stopColor="#014d4e" />
        </linearGradient>
      </defs>

      {/* Outer tick ring */}
      <g stroke="url(#holo-rim)" strokeWidth="1.5">
        <circle cx="200" cy="200" r="168" fill="none" strokeOpacity="0.5" />
        {ticks.map((angle) => (
          <line
            key={angle}
            x1="200"
            y1="32"
            x2="200"
            y2={angle % 90 === 0 ? 12 : 20}
            transform={`rotate(${angle} 200 200)`}
            strokeOpacity={angle % 90 === 0 ? 0.85 : 0.4}
          />
        ))}
      </g>

      {/* Concentric ancestral rings */}
      <g fill="none" stroke="#e6a817" strokeOpacity="0.45" strokeWidth="1.5">
        <circle cx="200" cy="200" r="134" strokeDasharray="10 14" />
        <circle cx="200" cy="200" r="112" />
        <circle cx="200" cy="200" r="78" strokeDasharray="4 10" />
      </g>

      {/* Radial tribal spokes */}
      <g stroke="#c1440e" strokeOpacity="0.5" strokeWidth="1.5">
        {spokes.map((angle) => (
          <line
            key={angle}
            x1="200"
            y1="86"
            x2="200"
            y2="112"
            transform={`rotate(${angle} 200 200)`}
          />
        ))}
      </g>

      {/* Holographic core */}
      <circle cx="200" cy="200" r="70" fill="url(#holo-core)" />
      <path
        d="M200 138 258 200 200 262 142 200Z"
        fill="none"
        stroke="#0d0d0d"
        strokeOpacity="0.55"
        strokeWidth="2"
      />
      <path
        d="M200 162 236 200 200 238 164 200Z"
        fill="#0d0d0d"
        fillOpacity="0.55"
        stroke="#ffbf00"
        strokeWidth="1.5"
      />
      <circle cx="200" cy="200" r="9" fill="#ffbf00" />
    </svg>
  );
}

/** Small woven mark used as the brand glyph in the header and footer. */
export function WeaveMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    >
      <path d="M16 3 29 16 16 29 3 16Z" />
      <path d="M16 10 22 16 16 22 10 16Z" />
    </svg>
  );
}
