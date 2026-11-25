"use client";
import { useEffect, useState } from "react";
import {
  CashIcon, TransferIcon, IdCardIcon, ShieldCheckIcon,
  CreditCardIcon, ReceiptIcon, BankIcon, ChartIcon,
  GlobeIcon, LockIcon, UsersIcon, BoltIcon, MapPinIcon,
  PhoneIcon, MailIcon, ExternalLinkIcon, CheckCircleIcon,
  CameraIcon, HomeIcon, SimCardIcon, AlertTriangleIcon,
  MenuIcon, XIcon, ArrowRightIcon, ChevronUpIcon,
} from "@/components/icons/MoniBankIcons";

/* ─── data ───────────────────────────────────────────────────────── */

const services = [
  {
    Icon: CashIcon,
    title: "Cash Deposit & Withdrawal",
    description:
      "Secure, instant cash deposit and withdrawal services through our certified UBA Moni agent points across Tarka, Benue State. Every transaction includes immediate SMS confirmation.",
    badge: "Instant",
  },
  {
    Icon: TransferIcon,
    title: "Money Transfers",
    description:
      "Inter-bank and intra-bank fund transfers to over 500 financial institutions across Nigeria, processed in real time at our agent locations.",
  },
  {
    Icon: IdCardIcon,
    title: "Account Opening",
    description:
      "Open a UBA bank account on the spot with a valid ID and passport photograph. No branch visit required, as we complete onboarding at our agent point.",
  },
  {
    Icon: ShieldCheckIcon,
    title: "BVN Enrolment",
    description:
      "Register your Bank Verification Number (BVN) through our authorised agent network. Free of charge, with no travel to a UBA branch needed.",
    badge: "Free",
  },
  {
    Icon: CreditCardIcon,
    title: "ATM Card Issuance",
    description:
      "Open a UBA account through our agent point and receive your UBA ATM debit card so you can access your funds anywhere in Nigeria.",
    badge: "On-site",
  },
  {
    Icon: ReceiptIcon,
    title: "Bill Payments",
    description:
      "Pay electricity, DSTV, MTN, Airtel, Glo, 9mobile, and other utility bills directly at our agent points with no mobile data required.",
  },
  {
    Icon: BankIcon,
    title: "Agent Banking Onboarding",
    description:
      "Become a UBA Moni sub-agent in Tarka or surrounding LGAs under our Super Agent network with structured training, terminal assignment, and support.",
  },
  {
    Icon: ChartIcon,
    title: "Business Advisory",
    description:
      "Practical financial guidance for small businesses and traders on account management, payment collection, digital banking, and formal financial products.",
  },
];

const history = [
  {
    year: "2024",
    company: "Gue Group Limited Established",
    role: "RC 7501599 · MAY 2024",
    description:
      "Gue Group Limited incorporated as a holding company in Nigeria, creating the group structure for multi-sector subsidiaries across technology, engineering, education, and financial inclusion.",
  },
  {
    year: "2026",
    company: "UBA Moni Super Agent Operations",
    role: "GUE ENGINEERING LIMITED · RC 8342226 · MARCH 2026",
    description:
      "Following terminal dispatch and process-flow training in March 2026, agency banking operations commenced in Tarka, Benue State under the UBA Moni Super Agent programme.",
  },
  {
    year: "2026",
    company: "Gue Moni Limited Incorporated",
    role: "RC 9853276 · SEPTEMBER 12, 2026",
    description:
      "Financial inclusion operations formalised under a dedicated subsidiary, Gue Moni Limited, incorporated under CAMA 2020 to provide agency banking and business advisory across underserved communities.",
  },
];

const impactPoints = [
  {
    Icon: GlobeIcon,
    title: "Financial Inclusion in Tarka",
    description:
      "Our agent network brings formal banking to communities in Tarka LGA without nearby bank branches, serving farmers, traders, civil servants, and households.",
  },
  {
    Icon: BoltIcon,
    title: "Instant, Reliable Settlement",
    description:
      "Every deposit, withdrawal, and transfer is processed in real time through the UBA system. Customers receive an SMS alert immediately on completion.",
  },
  {
    Icon: LockIcon,
    title: "CBN-Regulated & UBA Certified",
    description:
      "Gue Moni Limited operates within the CBN agency banking framework as a certified UBA Moni Super Agent. All transactions are secure and fully regulated.",
  },
  {
    Icon: UsersIcon,
    title: "Agent Business Opportunities",
    description:
      "We onboard, train, and support sub-agents across Tarka and surrounding areas. Agents earn transaction-based commissions through structured, compliant operations.",
  },
];

const agentBenefits = [
  {
    title: "Account Opening & Funding Rewards",
    detail: "Earn structured commissions on verified UBA accounts opened and funded at your agent point.",
  },
  {
    title: "Transaction-Based Commissions",
    detail: "Generate steady income on cash deposits, withdrawals, transfers, and utility bill payments.",
  },
  {
    title: "Dual-Wallet Settlement",
    detail: "Separate transaction float and commission wallet for clear accounting and instant access to earnings.",
  },
  {
    title: "Training & Terminal Support",
    detail: "Guidance on UBA Moni POS terminal setup, KYC compliance, and day-to-day operational support.",
  },
];

const whatToBring = [
  { Icon: IdCardIcon, title: "Valid ID", desc: "NIN slip, voter card, national ID card, driver's licence, or international passport" },
  { Icon: CameraIcon, title: "Passport Photo", desc: "One recent passport photograph" },
  { Icon: SimCardIcon, title: "Phone Number", desc: "A SIM card registered in your name" },
  { Icon: HomeIcon, title: "Home Address", desc: "Your address in Tarka or surrounding LGA" },
];

const navItems = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#impact", label: "Why Us" },
  { href: "#history", label: "History" },
  { href: "https://www.guegroup.com", label: "Gue Group", external: true },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#history", label: "History" },
];

const groupLinks = [
  { href: "https://www.guegroup.com", label: "Gue Group Limited" },
  { href: "https://www.gueengineering.com", label: "GUE Engineering" },
  { href: "https://www.guecyber.ng", label: "Gue Cyber Nigeria" },
  { href: "https://www.guevte.com", label: "GUE Educational" },
];

const ext = { target: "_blank", rel: "noreferrer" };

/* ─── component ──────────────────────────────────────────────────── */

const GueMoniLanding = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 420);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-700 font-sans antialiased">
      {/* ─── NAV ─────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs">
        <nav aria-label="Primary navigation" className="max-w-7xl mx-auto flex items-center justify-between gap-6 px-6 py-3.5">
          <a href="#top" className="flex items-center gap-3 font-sans font-extrabold text-lg text-[#1A2B5E] tracking-tight">
            <img src="/brand/logo.jpeg" alt="Gue Moni Limited logo" className="w-10 h-10 object-contain rounded-md" />
            <span>Gue <span className="text-[#CC2020]">Moni</span></span>
          </a>

          <ul className="hidden lg:flex items-center gap-8 list-none">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  {...(item.external ? ext : {})}
                  className="text-sm font-semibold text-slate-600 hover:text-[#CC2020] transition-colors"
                >
                  {item.label}
                  {item.external && <ExternalLinkIcon size={12} className="inline ml-1 -mt-0.5" />}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center px-5 py-2.5 rounded-lg bg-[#CC2020] text-white text-sm font-bold shadow-sm shadow-red-200 hover:bg-[#A51A1A] hover:-translate-y-px transition-all"
            >
              Contact Us
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </nav>

        {mobileOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-6 pb-6 pt-4 shadow-lg">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  {...(item.external ? ext : {})}
                  onClick={() => setMobileOpen(false)}
                  className="text-slate-700 font-medium py-2.5 px-2 rounded-lg hover:bg-slate-50 hover:text-[#CC2020] transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-flex items-center justify-center px-5 py-3 rounded-lg bg-[#CC2020] text-white text-sm font-bold"
              >
                Contact Us
              </a>
            </div>
          </div>
        )}

        <div className="h-0.5 bg-gradient-to-r from-[#CC2020] via-[#1A2B5E] to-transparent" />
      </header>

      <main id="top">
        {/* ─── HERO ──────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#1A2B5E] via-[#0F1D3D] to-[#0A1628] text-white">
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
              maskImage: "radial-gradient(ellipse 80% 70% at 50% 30%, black 20%, transparent 80%)",
            }}
          />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(900px,90vw)] h-[500px] bg-[radial-gradient(ellipse,rgba(204,32,32,0.16),transparent_65%)] pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28 grid lg:grid-cols-[1.2fr_0.85fr] gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 text-xs font-medium uppercase tracking-wider text-white/85 mb-7">
                Nigeria · Gue Moni Limited · RC 9853276 · Certified UBA Moni Super Agent
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-sans font-extrabold leading-[1.06] tracking-tight">
                Banking Has Come to{" "}
                <span className="text-[#FF4D4D]">Your Community.</span>
              </h1>

              <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-xl">
                Gue Moni Limited is a certified UBA Moni Super Agent providing cash deposits,
                withdrawals, transfers, BVN enrolment, account opening, and ATM card issuance
                right here in Tarka, Benue State.
              </p>

              <div className="flex flex-wrap gap-4 mt-9">
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-[#CC2020] text-white font-bold shadow-lg shadow-red-950/40 hover:bg-[#A51A1A] hover:-translate-y-px transition-all"
                >
                  Our Services <ArrowRightIcon size={16} />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-white/25 text-white font-bold hover:bg-white/10 transition-all"
                >
                  <MapPinIcon size={16} /> Find Us in Tarka
                </a>
              </div>

              <div className="flex flex-wrap gap-2 mt-10">
                {["Cash Deposits & Withdrawals", "Money Transfers", "BVN Enrolment", "ATM Cards", "Account Opening", "Bill Payments"].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full border border-white/15 bg-white/5 text-white/75 text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right-hand Agent Banking Summary Card */}
            <aside aria-label="Agent banking overview" className="rounded-2xl border border-white/15 bg-white/[0.06] backdrop-blur-md p-6 sm:p-8 shadow-2xl">
              <div className="flex items-center justify-between pb-5 border-b border-white/10">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-300">UBA Moni Network</p>
                  <p className="text-lg font-sans font-bold text-white mt-0.5">Tarka Agency Hub</p>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  CBN Regulated
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 py-6 border-b border-white/10">
                <div className="rounded-xl bg-white/[0.05] border border-white/10 p-4">
                  <p className="text-2xl font-sans font-extrabold text-white">500+</p>
                  <p className="text-xs text-slate-300 mt-1">Nigerian Banks Supported</p>
                </div>
                <div className="rounded-xl bg-white/[0.05] border border-white/10 p-4">
                  <p className="text-2xl font-sans font-extrabold text-white">Real-Time</p>
                  <p className="text-xs text-slate-300 mt-1">SMS Transaction Alerts</p>
                </div>
              </div>

              <ul className="space-y-3 pt-5 text-sm text-slate-200">
                {[
                  "Free BVN registration with no branch travel",
                  "Instant UBA account opening & debit cards",
                  "Sub-agent onboarding & terminal support",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircleIcon size={17} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        {/* ─── TRUST BAR ─────────────────────────────────────────── */}
        <section aria-label="Trust indicators" className="bg-slate-50 border-y border-slate-200">
          <div className="max-w-7xl mx-auto flex justify-center flex-wrap gap-x-10 gap-y-3 px-6 py-4">
            {[
              "CAC Registered · RC 9853276",
              "Certified UBA Moni Super Agent",
              "Tarka LGA, Benue State",
              "CBN Agency Banking Framework",
            ].map((text) => (
              <p key={text} className="flex items-center gap-2 text-slate-600 text-xs font-medium">
                <CheckCircleIcon size={14} className="text-emerald-600 flex-shrink-0" />
                {text}
              </p>
            ))}
          </div>
        </section>

        {/* ─── ABOUT ─────────────────────────────────────────────── */}
        <section id="about" className="py-20 lg:py-28 px-6">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs font-medium uppercase tracking-widest text-[#CC2020] font-semibold mb-3 pb-2 border-b-2 border-[#CC2020] inline-block">
              Who We Are
            </p>
            <h2 className="text-3xl lg:text-4xl font-sans font-extrabold text-[#0F172A] leading-tight tracking-tight max-w-2xl">
              Financial Inclusion for Underserved Communities
            </h2>

            <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-14 mt-12 items-start">
              <div className="space-y-5 text-slate-600 leading-relaxed">
                <p>
                  <strong className="text-[#0F172A]">Gue Moni Limited</strong> (RC 9853276) is a privately incorporated
                  Nigerian company registered under the Companies and Allied Matters Act 2020 on 12 September 2026,
                  and a subsidiary of <strong className="text-[#0F172A]">Gue Group Limited</strong> (RC 7501599).
                </p>
                <p>
                  We exist to bring essential financial services to communities in Tarka Local Government Area and
                  surrounding areas in Benue State that have limited access to traditional bank branches.
                  As a certified <strong className="text-[#0F172A]">UBA Moni Super Agent</strong>, we operate a network
                  of agency banking points where residents can complete everyday banking transactions safely, quickly, and close to home.
                </p>
                <p>
                  Our services cover cash deposits and withdrawals, instant money transfers, BVN enrolment, account opening,
                  ATM card issuance, and bill payments, all processed through the official United Bank for Africa platform
                  in line with CBN agency banking regulations.
                </p>
                <p>
                  We also onboard and support sub-agents across the area, providing structured training, terminal assignment,
                  and ongoing operational support to grow a reliable agent network that serves the community.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-100 divide-y divide-slate-100">
                {[
                  { icon: <BankIcon size={20} className="text-[#CC2020]" />, label: "Registration", value: "RC 9853276 · CAMA 2020", sub: "Tax ID: 2620731247808" },
                  { icon: <CheckCircleIcon size={20} className="text-[#CC2020]" />, label: "Incorporated", value: "12 September 2026", sub: "Status: Active" },
                  { icon: <ExternalLinkIcon size={20} className="text-[#CC2020]" />, label: "Group Structure", value: "Subsidiary of Gue Group Limited", sub: "RC 7501599" },
                  { icon: <MapPinIcon size={20} className="text-[#CC2020]" />, label: "Location", value: "Tarka LGA, Benue State", sub: "Nigeria" },
                  { icon: <ShieldCheckIcon size={20} className="text-[#CC2020]" />, label: "Certification", value: "UBA Moni Super Agent", sub: "Financial · Banking · Business Advisory" },
                ].map((fact) => (
                  <div key={fact.label} className="flex gap-4 px-6 py-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center">
                      {fact.icon}
                    </div>
                    <div>
                      <p className="text-[0.7rem] font-medium uppercase tracking-wider text-slate-500">{fact.label}</p>
                      <p className="text-sm font-semibold text-[#0F172A] mt-0.5">{fact.value}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{fact.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── SERVICES ──────────────────────────────────────────── */}
        <section id="services" className="py-20 lg:py-28 px-6 bg-slate-50 border-y border-slate-200">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs font-medium uppercase tracking-widest text-[#CC2020] font-semibold mb-3 pb-2 border-b-2 border-[#CC2020] inline-block">
              What We Offer
            </p>
            <h2 className="text-3xl lg:text-4xl font-sans font-extrabold text-[#0F172A] leading-tight tracking-tight">
              Financial Services at Your Doorstep
            </h2>
            <p className="mt-4 mb-12 max-w-xl text-slate-600 leading-relaxed">
              All services are processed through the official UBA Moni platform: secure, real-time,
              and regulated by the Central Bank of Nigeria.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {services.map((s) => (
                <article
                  key={s.title}
                  className="group relative rounded-2xl border border-slate-200 bg-white p-7 shadow-xs transition-all hover:-translate-y-1 hover:shadow-md hover:border-slate-300"
                >
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-red-50 flex items-center justify-center text-[#CC2020]">
                      <s.Icon size={22} />
                    </div>
                    {s.badge && (
                      <span className="px-2.5 py-0.5 rounded-full bg-red-50 border border-red-200/80 text-[#CC2020] text-[0.7rem] font-medium font-semibold uppercase tracking-wide">
                        {s.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-base font-sans font-bold text-[#0F172A] mb-2">{s.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{s.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ─── BVN ALERT ─────────────────────────────────────────── */}
        <section className="bg-red-50/80 border-y border-[#CC2020]/25">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-5 sm:gap-6 items-start px-6 py-10 lg:py-12">
            <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#CC2020]/10 flex items-center justify-center text-[#CC2020]">
              <AlertTriangleIcon size={26} />
            </div>
            <div>
              <h2 className="text-xl lg:text-2xl font-sans font-extrabold text-[#CC2020] mb-2.5">
                BVN is Now Mandatory for All Nigerians
              </h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                The Central Bank of Nigeria requires every Nigerian with a bank account to have a Bank Verification Number (BVN).
                Without one, your account may be restricted. Visit our agent point in Tarka, where we register your BVN free of charge,
                with no branch visit required.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#CC2020] text-white text-sm font-bold shadow-sm shadow-red-200 hover:bg-[#A51A1A] transition-all"
              >
                Register Your BVN Today <ArrowRightIcon size={14} />
              </a>
            </div>
          </div>
        </section>

        {/* ─── WHY US / IMPACT ───────────────────────────────────── */}
        <section id="impact" className="py-20 lg:py-28 px-6">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs font-medium uppercase tracking-widest text-[#CC2020] font-semibold mb-3 pb-2 border-b-2 border-[#CC2020] inline-block">
              Why Gue Moni
            </p>
            <h2 className="text-3xl lg:text-4xl font-sans font-extrabold text-[#0F172A] leading-tight tracking-tight">
              Safe, Fast &amp; Right in Your Community
            </h2>
            <p className="mt-4 mb-12 max-w-xl text-slate-600 leading-relaxed">
              No travel to Makurdi. No long queues. No branch visit.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
              {impactPoints.map((point, i) => (
                <article key={point.title} className="p-8 bg-white">
                  <p className="text-xs font-medium text-[#CC2020] tracking-widest mb-4 font-semibold">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <div className="w-11 h-11 rounded-xl bg-red-50 flex items-center justify-center text-[#CC2020] mb-4">
                    <point.Icon size={22} />
                  </div>
                  <h3 className="text-base font-sans font-bold text-[#0F172A] mb-2">{point.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{point.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ─── WHAT TO BRING ─────────────────────────────────────── */}
        <section className="py-20 lg:py-28 px-6 bg-slate-50 border-y border-slate-200">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs font-medium uppercase tracking-widest text-[#CC2020] font-semibold mb-3 pb-2 border-b-2 border-[#CC2020] inline-block">
              Walk In Ready
            </p>
            <h2 className="text-3xl lg:text-4xl font-sans font-extrabold text-[#0F172A] leading-tight tracking-tight">
              What to Bring to Our Agent Point
            </h2>
            <p className="mt-4 mb-12 max-w-xl text-slate-600 leading-relaxed">
              For account opening and BVN enrolment, bring the following documents.
              For cash transactions, just your phone and account details.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {whatToBring.map((item) => (
                <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-xs hover:-translate-y-1 hover:shadow-md transition-all">
                  <div className="w-11 h-11 rounded-xl bg-red-50 flex items-center justify-center text-[#CC2020] mb-4">
                    <item.Icon size={22} />
                  </div>
                  <h3 className="text-base font-sans font-bold text-[#0F172A] mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ─── HISTORY ───────────────────────────────────────────── */}
        <section id="history" className="py-20 lg:py-28 px-6">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs font-medium uppercase tracking-widest text-[#CC2020] font-semibold mb-3 pb-2 border-b-2 border-[#CC2020] inline-block">
              Our History
            </p>
            <h2 className="text-3xl lg:text-4xl font-sans font-extrabold text-[#0F172A] leading-tight tracking-tight max-w-2xl">
              From Agency Banking Operations to a Dedicated Subsidiary
            </h2>
            <p className="mt-4 mb-12 max-w-xl text-slate-600 leading-relaxed">
              Gue Moni Limited was built on real operational experience, not a fresh start.
            </p>

            <div className="max-w-3xl">
              {history.map((item) => (
                <article key={`${item.year}-${item.company}`} className="grid grid-cols-[72px_1fr] sm:grid-cols-[110px_1fr] gap-5 sm:gap-6">
                  <div className="pt-5 text-right">
                    <span className="text-sm font-medium font-semibold text-[#CC2020]">{item.year}</span>
                  </div>
                  <div className="relative pl-7 pb-10 border-l-2 border-slate-200">
                    <span className="absolute top-6 -left-[6px] w-2.5 h-2.5 rounded-full bg-[#CC2020] ring-4 ring-red-50" />
                    <h3 className="text-lg font-sans font-bold text-[#0F172A] pt-4">{item.company}</h3>
                    <p className="text-xs font-medium text-[#CC2020] mt-1 mb-3">{item.role}</p>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ─── BECOME AN AGENT ───────────────────────────────────── */}
        <section className="py-20 lg:py-28 px-6 bg-slate-50 border-y border-slate-200">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs font-medium uppercase tracking-widest text-[#CC2020] font-semibold mb-3 pb-2 border-b-2 border-[#CC2020] inline-block">
              Agent Opportunity
            </p>
            <h2 className="text-3xl lg:text-4xl font-sans font-extrabold text-[#0F172A] leading-tight tracking-tight">
              Become a UBA Moni Sub-Agent in Tarka
            </h2>
            <p className="mt-4 mb-10 max-w-2xl text-slate-600 leading-relaxed">
              We support eligible applicants through onboarding requirements and operational setup
              under our Super Agent network in line with UBA Moni programme guidelines, KYC expectations,
              and applicable CBN regulatory requirements.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10 max-w-4xl">
              {agentBenefits.map((benefit) => (
                <div key={benefit.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs flex gap-3.5 items-start">
                  <CheckCircleIcon size={20} className="text-[#CC2020] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-sans font-bold text-[#0F172A]">{benefit.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed mt-1">{benefit.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-[#CC2020] text-white font-bold shadow-sm shadow-red-200 hover:bg-[#A51A1A] hover:-translate-y-px transition-all"
              >
                Request Agent Onboarding <ArrowRightIcon size={14} />
              </a>
              <a
                href="https://www.ubagroup.com/nigeria/personal-banking/uba-moni/"
                {...ext}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-slate-300 bg-white text-slate-700 font-bold hover:border-[#CC2020] hover:text-[#CC2020] transition-all"
              >
                Learn About UBA Moni <ExternalLinkIcon size={14} />
              </a>
            </div>
          </div>
        </section>

        {/* ─── GROUP SECTION ─────────────────────────────────────── */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="rounded-2xl border border-slate-200 bg-gradient-to-r from-slate-50 to-white p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center gap-8 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-[#1A2B5E]/10 flex items-center justify-center text-[#1A2B5E] flex-shrink-0">
                <BankIcon size={28} />
              </div>
              <div className="flex-1">
                <p className="text-xs font-medium uppercase tracking-widest text-[#CC2020] font-semibold mb-2">Part of the Group</p>
                <h2 className="text-xl lg:text-2xl font-sans font-extrabold text-[#0F172A] mb-3">
                  A Subsidiary of Gue Group Limited
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed max-w-xl">
                  Gue Moni Limited operates under Gue Group Limited (RC 7501599), alongside
                  GUE Engineering (software), Gue Cyber (cybersecurity), GUE Educational
                  (TVET training), GUE Smart Farming (agritech), GUE Realty (real estate),
                  GUE Industrial Parks, and GUE Mobility across Nigeria and Belgium.
                </p>
              </div>
              <div className="flex flex-col gap-2.5 w-full lg:w-auto lg:min-w-[210px]">
                {groupLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    {...ext}
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg border border-slate-200 bg-white text-sm font-semibold text-slate-700 hover:border-[#CC2020] hover:text-[#CC2020] transition-all"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── CONTACT ───────────────────────────────────────────── */}
        <section id="contact" className="py-20 lg:py-28 px-6 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-xs font-medium uppercase tracking-widest text-[#CC2020] font-semibold mb-3">Find Us</p>
            <h2 className="text-3xl lg:text-4xl font-sans font-extrabold text-[#0F172A] leading-tight tracking-tight mx-auto max-w-xl">
              Visit Our Agent Point in Tarka
            </h2>
            <p className="mt-4 mb-12 max-w-lg mx-auto text-slate-600 leading-relaxed">
              Our agent points are located in Tarka Local Government Area, Benue State.
              Contact us for exact location details, operating hours, or to enquire about becoming a sub-agent.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
              {[
                { Icon: PhoneIcon, label: "Call / WhatsApp", value: "0904 115 7068", href: "tel:+2349041157068" },
                { Icon: MailIcon, label: "Email", value: "info@guemoni.com", href: "mailto:info@guemoni.com" },
                { Icon: MapPinIcon, label: "Location", value: "Tarka LGA, Benue State, Nigeria" },
                { Icon: GlobeIcon, label: "Website", value: "www.guemoni.com", href: "https://www.guemoni.com" },
              ].map((c) => (
                <div key={c.label} className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-xs hover:shadow-md transition-shadow">
                  <div className="w-11 h-11 rounded-xl bg-red-50 flex items-center justify-center text-[#CC2020] mx-auto mb-3">
                    <c.Icon size={20} />
                  </div>
                  <p className="text-[0.7rem] font-medium uppercase tracking-wider text-slate-500 mb-1">{c.label}</p>
                  {c.href ? (
                    <a href={c.href} className="text-sm font-semibold text-[#0F172A] hover:text-[#CC2020] transition-colors block">
                      {c.value}
                    </a>
                  ) : (
                    <p className="text-sm font-semibold text-[#0F172A]">{c.value}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ─── FOOTER ──────────────────────────────────────────────── */}
      <footer className="bg-[#0A1628] text-slate-300 pt-14 pb-8 px-6">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10">
          <div>
            <a href="#top" className="flex items-center gap-3 font-sans font-extrabold text-lg text-white tracking-tight">
              <img src="/brand/logo.jpeg" alt="Gue Moni Limited logo" className="w-10 h-10 object-contain rounded-md" />
              <span>Gue <span className="text-[#FF4D4D]">Moni</span></span>
            </a>
            <p className="mt-3 text-xs font-medium uppercase tracking-wider text-slate-400 leading-relaxed">
              Financial · Banking · Business Advisory · Tarka, Benue State, Nigeria
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-slate-400 mb-4">Company</p>
            <div className="flex flex-col gap-2.5">
              {footerLinks.map((link) => (
                <a key={link.label} href={link.href} className="text-sm text-slate-300 hover:text-white transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-slate-400 mb-4">Gue Group</p>
            <div className="flex flex-col gap-2.5">
              {groupLinks.map((link) => (
                <a key={link.label} href={link.href} {...ext} className="text-sm text-slate-300 hover:text-white transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-slate-400 mb-4">Contact</p>
            <div className="flex flex-col gap-2.5">
              <a href="tel:+2349041157068" className="text-sm text-slate-300 hover:text-white transition-colors">0904 115 7068</a>
              <a href="mailto:info@guemoni.com" className="text-sm text-slate-300 hover:text-white transition-colors">info@guemoni.com</a>
              <a href="#contact" className="text-sm text-slate-300 hover:text-white transition-colors">Find Our Location</a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-white/10">
          <p className="text-xs text-slate-400">
            © 2026 Gue Moni Limited (RC 9853276) · Tax ID: 2620731247808 · Subsidiary of
            Gue Group Limited (RC 7501599) · Tarka LGA, Benue State, Nigeria
          </p>
        </div>
      </footer>

      {/* ─── SCROLL TO TOP ───────────────────────────────────────── */}
      {showScrollTop && (
        <a
          href="#top"
          className="fixed right-5 bottom-5 z-30 w-11 h-11 rounded-full border border-slate-300 bg-white shadow-lg flex items-center justify-center text-[#CC2020] hover:-translate-y-1 hover:border-[#CC2020] transition-all"
          aria-label="Scroll to top"
        >
          <ChevronUpIcon size={20} />
        </a>
      )}
    </div>
  );
};

export default GueMoniLanding;
