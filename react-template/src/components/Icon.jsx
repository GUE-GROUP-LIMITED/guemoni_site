const paths = {
  arrow: "M5 12h14m-6-6 6 6-6 6",
  bank: "m3 9 9-6 9 6H3Zm2 3v7m7-7v7m7-7v7M3 21h18",
  transfer: "M4 7h16m-4-4 4 4-4 4M20 17H4m4-4-4 4 4 4",
  wallet: "M20 8H5a2 2 0 0 1 0-4h13v4M4 8v12h16V8m0 5h-6v4h6",
  card: "M3 7h18v13H3V7Zm0 4h18M6 16h4",
  check: "m5 12 4 4L19 6",
  pin: "M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0ZM12 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6",
  phone: "m7 3 3 5-3 3c1 3 3 5 6 6l3-3 5 3-2 4C10 23 1 14 3 5l4-2Z",
  mail: "M3 5h18v14H3V5Zm0 1 9 7 9-7",
  shield: "m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Z",
  people:
    "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8M18 8a3 3 0 0 1 0 6m1 3a4 4 0 0 1 3 4",
  receipt: "M5 3h14v18l-3-2-4 2-4-2-3 2V3Zm4 5h6m-6 4h6",
};
export default function Icon({ name = "arrow", size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={paths[name] || paths.arrow} />
    </svg>
  );
}
