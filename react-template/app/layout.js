import "./globals.css";

export const metadata = {
  title: "Gue Moni Limited — Financial Inclusion & Agency Banking",
  description:
    "Gue Moni Limited (RC 9853276) — Certified UBA Moni Super Agent. Financial inclusion, agency banking, BVN enrolment, and business advisory in Tarka, Benue State, Nigeria.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
