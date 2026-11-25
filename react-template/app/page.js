import GueMoniLanding from "@/components/home/GueMoniLanding";

export const metadata = {
  title: "Gue Moni Limited | Financial Inclusion & Agency Banking | Tarka, Benue State",
  description:
    "Gue Moni Limited (RC 9853276) is a certified UBA Moni Super Agent providing cash deposits, withdrawals, transfers, BVN enrolment, ATM card issuance, and account opening in Tarka, Benue State. A subsidiary of Gue Group Limited.",
  keywords: [
    "UBA Moni Super Agent",
    "agency banking Tarka",
    "financial inclusion Benue State",
    "BVN enrolment Tarka",
    "cash deposit withdrawal Tarka",
    "Gue Moni Limited",
    "Gue Group Limited",
  ],
  openGraph: {
    title: "Gue Moni Limited | Banking at Your Doorstep",
    description:
      "Certified UBA Moni Super Agent in Tarka, Benue State. Cash, transfers, BVN, ATM cards, and account opening with no branch visit needed.",
    url: "https://www.guemoni.com",
    siteName: "Gue Moni Limited",
    locale: "en_NG",
    type: "website",
  },
};

export default function Home() {
  return <GueMoniLanding />;
}
