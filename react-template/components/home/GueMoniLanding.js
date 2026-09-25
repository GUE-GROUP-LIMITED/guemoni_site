const services = [
  {
    icon: "💵",
    title: "Cash Deposit & Withdrawal",
    description:
      "Secure, instant cash deposit and withdrawal services through our certified UBA Moni agent points across Tarka, Benue State. Every transaction is real-time with immediate SMS confirmation.",
    highlight: true,
  },
  {
    icon: "📲",
    title: "Money Transfers",
    description:
      "Inter-bank and intra-bank fund transfers to over 500 financial institutions across Nigeria, processed instantly at our agent locations.",
  },
  {
    icon: "🆔",
    title: "Account Opening",
    description:
      "Open a UBA bank account on the spot with a valid ID and passport photograph. No branch visit required — we handle the process at our agent point.",
  },
  {
    icon: "🔢",
    title: "BVN Enrolment",
    description:
      "Register your Bank Verification Number (BVN) through our authorised agent network. Free of charge, no travel to a UBA branch needed.",
    highlight: true,
  },
  {
    icon: "💳",
    title: "ATM Card Issuance",
    description:
      "Open a UBA account through our agent point and receive your UBA ATM debit card. Access your money anywhere in Nigeria.",
    highlight: true,
  },
  {
    icon: "📄",
    title: "Bill Payments",
    description:
      "Pay electricity, DSTV, MTN, Airtel, Glo, 9mobile, and other utility bills directly at our agent points — no data required.",
  },
  {
    icon: "🏦",
    title: "Agent Banking Onboarding",
    description:
      "Become a UBA Moni sub-agent in Tarka or surrounding LGAs under our Super Agent network. We provide training, terminal assignment, and ongoing operational support.",
  },
  {
    icon: "📈",
    title: "Business Advisory",
    description:
      "Financial guidance for small businesses and traders on account management, payment collection, digital banking, and accessing formal financial products.",
  },
];

const history = [
  {
    year: "2024",
    company: "Gue Group Limited Established",
    role: "RC 7501599 · MAY 2024",
    description:
      "Gue Group Limited incorporated as a holding company in Nigeria, creating the group structure for multi-sector subsidiaries across technology, engineering, education, financial inclusion, and more.",
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
      "Financial inclusion operations formalised under a dedicated subsidiary — Gue Moni Limited — incorporated under CAMA 2020 as a subsidiary of Gue Group Limited, to provide focused financial services, agency banking, and business advisory across underserved communities in Nigeria.",
  },
];

const impactPoints = [
  {
    icon: "🌍",
    title: "Financial Inclusion in Tarka",
    description:
      "Our agent network brings formal banking to communities in Tarka LGA without nearby bank branches — serving farmers, traders, civil servants, and households.",
  },
  {
    icon: "⚡",
    title: "Instant, Reliable Settlement",
    description:
      "Every deposit, withdrawal, and transfer is processed in real time through the UBA system. Customers receive an SMS alert immediately on completion.",
  },
  {
    icon: "🔐",
    title: "CBN-Regulated & UBA Certified",
    description:
      "Gue Moni Limited operates within the CBN agency banking framework as a certified UBA Moni Super Agent. All transactions are secure and fully regulated.",
  },
  {
    icon: "👥",
    title: "Agent Business Opportunities",
    description:
      "We onboard, train, and support sub-agents across Tarka and surrounding areas. Agents earn transaction-based commissions through structured, compliant operations.",
  },
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
];

const externalProps = {
  target: "_blank",
  rel: "noreferrer",
};

const GueMoniLanding = () => {
  return (
    <div className="gue-home gue-moni">
      {/* NAV */}
      <header className="gue-home__nav-shell">
        <nav className="gue-home__nav">
          <a href="#top" className="gue-home__logo">
            <img src="/brand/logo.jpeg" alt="Gue Moni Limited logo" />
            <span>
              Gue <em>Moni</em>
            </span>
          </a>
          <ul className="gue-home__nav-links" aria-label="Primary navigation">
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} {...(item.external ? externalProps : {})}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="gue-home__nav-cta">
            Contact Us
          </a>
          <details className="gue-home__mobile-nav">
            <summary aria-label="Open navigation menu">
              <span /><span /><span />
            </summary>
            <div className="gue-home__mobile-panel">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} {...(item.external ? externalProps : {})}>
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="gue-home__mobile-cta">Contact Us</a>
            </div>
          </details>
        </nav>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="gue-home__hero">
          <div className="gue-home__hero-glow" />
          <div className="gue-home__hero-grid" />
          <div className="gue-home__hero-inner">
            <div className="gue-home__eyebrow">
              Nigeria · Gue Moni Limited · RC 9853276 · Certified UBA Moni Super Agent
            </div>
            <h1>
              Banking Has Come to <em>Your Community.</em>
            </h1>
            <p className="gue-home__hero-copy">
              Gue Moni Limited is a certified UBA Moni Super Agent providing cash deposits,
              withdrawals, transfers, BVN enrolment, account opening, and ATM card issuance
              — right here in Tarka, Benue State. No branch visit needed.
            </p>
            <div className="gue-home__hero-actions">
              <a href="#services" className="gue-home__button gue-home__button--primary">
                Our Services
              </a>
              <a href="#contact" className="gue-home__button gue-home__button--ghost">
                Find Us in Tarka
              </a>
            </div>
            <div className="gue-home__pills" aria-label="Key services">
              <span>Cash Deposits & Withdrawals</span>
              <span>Money Transfers</span>
              <span>BVN Enrolment</span>
              <span>ATM Cards</span>
              <span>Account Opening</span>
              <span>Bill Payments</span>
            </div>
          </div>
        </section>

        {/* TRUST BAR */}
        <section className="gue-home__trust-bar" aria-label="Trust indicators">
          <p>CAC Registered · RC 9853276</p>
          <p>Certified UBA Moni Super Agent</p>
          <p>Tarka LGA, Benue State</p>
          <p>CBN Agency Banking Framework</p>
        </section>

        {/* ABOUT */}
        <section id="about" className="gue-home__section">
          <p className="gue-home__kicker">Who We Are</p>
          <h2 className="gue-home__section-title">
            Financial Inclusion for Underserved Communities
          </h2>
          <div className="gue-home__about-grid">
            <div className="gue-home__body-copy">
              <p>
                <strong>Gue Moni Limited</strong> (RC 9853276) is a privately incorporated
                Nigerian company registered under the Companies and Allied Matters Act
                2020 on 12 September 2026, and a subsidiary of{" "}
                <strong>Gue Group Limited</strong> (RC 7501599).
              </p>
              <p>
                We exist to bring essential financial services to communities in Tarka
                Local Government Area and surrounding areas in Benue State that have
                limited access to traditional bank branches. As a certified{" "}
                <strong>UBA Moni Super Agent</strong>, we operate a network of agency
                banking points where residents can complete everyday banking transactions
                safely, quickly, and close to home.
              </p>
              <p>
                Our services cover cash deposits and withdrawals, instant money transfers,
                BVN enrolment, account opening, ATM card issuance, and bill payments —
                all processed through the official United Bank for Africa platform in
                line with CBN agency banking regulations.
              </p>
              <p>
                We also onboard and support sub-agents across the area, providing
                structured training, terminal assignment, and ongoing operational support
                to grow a reliable agent network that serves the community.
              </p>
            </div>

            <div className="gue-home__facts-card">
              <div className="gue-home__fact-row">
                <span className="gue-home__fact-icon">🏢</span>
                <div>
                  <p className="gue-home__fact-label">Registration</p>
                  <p className="gue-home__fact-value">RC 9853276 · CAMA 2020</p>
                  <p className="gue-home__fact-sub">Tax ID: 2620731247808</p>
                </div>
              </div>
              <div className="gue-home__fact-row">
                <span className="gue-home__fact-icon">📅</span>
                <div>
                  <p className="gue-home__fact-label">Incorporated</p>
                  <p className="gue-home__fact-value">12 September 2026</p>
                  <p className="gue-home__fact-sub">Status: Active</p>
                </div>
              </div>
              <div className="gue-home__fact-row">
                <span className="gue-home__fact-icon">🔗</span>
                <div>
                  <p className="gue-home__fact-label">Group Structure</p>
                  <p className="gue-home__fact-value">Subsidiary of Gue Group Limited</p>
                  <p className="gue-home__fact-sub">RC 7501599</p>
                </div>
              </div>
              <div className="gue-home__fact-row">
                <span className="gue-home__fact-icon">📍</span>
                <div>
                  <p className="gue-home__fact-label">Location</p>
                  <p className="gue-home__fact-value">Tarka LGA, Benue State</p>
                  <p className="gue-home__fact-sub">Nigeria</p>
                </div>
              </div>
              <div className="gue-home__fact-row gue-home__fact-row--last">
                <span className="gue-home__fact-icon">🏦</span>
                <div>
                  <p className="gue-home__fact-label">Certification</p>
                  <p className="gue-home__fact-value">UBA Moni Super Agent</p>
                  <p className="gue-home__fact-sub">Financial · Banking · Business Advisory</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="gue-home__section gue-home__section--alt">
          <p className="gue-home__kicker">What We Offer</p>
          <h2 className="gue-home__section-title">Financial Services at Your Doorstep</h2>
          <p className="gue-home__section-copy">
            All services are processed through the official UBA Moni platform — secure,
            real-time, and regulated by the Central Bank of Nigeria.
          </p>
          <div className="gue-home__services-grid">
            {services.map((service) => (
              <article
                key={service.title}
                className={`gue-home__service-card${service.highlight ? " gue-home__service-card--highlight" : ""}`}
              >
                <span className="gue-home__service-icon">{service.icon}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* BVN ALERT */}
        <section className="gue-home__section gue-moni__bvn-alert">
          <div className="gue-moni__bvn-inner">
            <span className="gue-moni__bvn-icon">⚠️</span>
            <div>
              <h2>BVN is Now Mandatory for All Nigerians</h2>
              <p>
                The Central Bank of Nigeria requires every Nigerian with a bank account
                to have a Bank Verification Number (BVN). Without one, your account may
                be restricted. Visit our agent point in Tarka — we register your BVN
                free of charge, with no branch visit required.
              </p>
              <a href="#contact" className="gue-home__button gue-home__button--primary" style={{marginTop: "1rem", display: "inline-block"}}>
                Register Your BVN Today →
              </a>
            </div>
          </div>
        </section>

        {/* WHY US / IMPACT */}
        <section id="impact" className="gue-home__section">
          <p className="gue-home__kicker">Why Gue Moni</p>
          <h2 className="gue-home__section-title">Safe, Fast & Right in Your Community</h2>
          <p className="gue-home__section-copy">
            No travel to Makurdi. No long queues. No branch visit.
          </p>
          <div className="gue-home__process-grid">
            {impactPoints.map((point, index) => (
              <article key={point.title} className="gue-home__process-step">
                <p className="gue-home__step-number">{String(index + 1).padStart(2, "0")}</p>
                <span className="gue-home__process-icon">{point.icon}</span>
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* WHAT TO BRING */}
        <section className="gue-home__section gue-home__section--alt">
          <p className="gue-home__kicker">Walk In Ready</p>
          <h2 className="gue-home__section-title">What to Bring to Our Agent Point</h2>
          <p className="gue-home__section-copy">
            For account opening and BVN enrolment, bring the following documents.
            For cash transactions, just your phone and account details.
          </p>
          <div className="gue-home__services-grid" style={{gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))"}}>
            {[
              { icon: "🪪", title: "Valid ID", desc: "NIN slip, voter card, national ID card, driver's licence, or international passport" },
              { icon: "📸", title: "Passport Photo", desc: "One recent passport photograph" },
              { icon: "📱", title: "Phone Number", desc: "A SIM card registered in your name" },
              { icon: "🏠", title: "Home Address", desc: "Your address in Tarka or surrounding LGA" },
            ].map((item) => (
              <article key={item.title} className="gue-home__service-card">
                <span className="gue-home__service-icon">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* HISTORY */}
        <section id="history" className="gue-home__section">
          <p className="gue-home__kicker">Our History</p>
          <h2 className="gue-home__section-title">
            From Agency Banking Operations to a Dedicated Subsidiary
          </h2>
          <p className="gue-home__section-copy">
            Gue Moni Limited was built on real operational experience — not a fresh start.
          </p>
          <div className="gue-home__timeline">
            {history.map((item) => (
              <article key={`${item.year}-${item.company}`} className="gue-home__timeline-item">
                <div className="gue-home__timeline-year">{item.year}</div>
                <div className="gue-home__timeline-body">
                  <span className="gue-home__timeline-dot" />
                  <h3>{item.company}</h3>
                  <p className="gue-home__timeline-role">{item.role}</p>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* BECOME AN AGENT */}
        <section className="gue-home__section gue-home__section--alt">
          <p className="gue-home__kicker">Agent Opportunity</p>
          <h2 className="gue-home__section-title">Become a UBA Moni Sub-Agent in Tarka</h2>
          <p className="gue-home__section-copy">
            We support eligible applicants through onboarding requirements and operational
            setup under our Super Agent network in line with UBA Moni programme guidelines,
            KYC expectations, and applicable CBN regulatory requirements. Agents earn
            transaction-based commissions on qualifying transactions.
          </p>
          <div className="gue-home__hero-actions" style={{marginTop: "2rem"}}>
            <a href="#contact" className="gue-home__button gue-home__button--primary">
              Request Agent Onboarding →
            </a>
            <a
              href="https://www.ubagroup.com/nigeria/personal-banking/uba-moni/"
              className="gue-home__button gue-home__button--ghost"
              {...externalProps}
            >
              Learn About UBA Moni
            </a>
          </div>
        </section>

        {/* GROUP SECTION */}
        <section className="gue-home__group-section">
          <div className="gue-home__group-card">
            <div className="gue-home__group-icon">🏛️</div>
            <div className="gue-home__group-copy">
              <p className="gue-home__kicker gue-home__kicker--compact">Part of the Group</p>
              <h2 className="gue-home__group-title">A Subsidiary of Gue Group Limited</h2>
              <p>
                Gue Moni Limited operates under Gue Group Limited (RC 7501599), alongside
                GUE Engineering (software), Gue Cyber (cybersecurity), GUE Educational
                (TVET training), GUE Smart Farming (agritech), GUE Realty (real estate),
                GUE Industrial Parks, and GUE Mobility across Nigeria and Belgium.
              </p>
            </div>
            <div className="gue-home__group-links">
              {groupLinks.map((link) => (
                <a key={link.label} href={link.href} {...externalProps}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT CTA */}
        <section id="contact" className="gue-home__cta">
          <p className="gue-home__kicker gue-home__kicker--center">Find Us</p>
          <h2 className="gue-home__section-title gue-home__section-title--center">
            Visit Our Agent Point in Tarka
          </h2>
          <p className="gue-home__section-copy gue-home__section-copy--center">
            Our agent points are located in Tarka Local Government Area, Benue State.
            Contact us for exact location details, operating hours, or to enquire about
            becoming a sub-agent.
          </p>
          <div className="gue-moni__contact-grid">
            <div className="gue-moni__contact-card">
              <span className="gue-home__service-icon">📞</span>
              <p className="gue-moni__contact-label">Call / WhatsApp</p>
              <a href="tel:+2349041157068" className="gue-moni__contact-value">0904 115 7068</a>
            </div>
            <div className="gue-moni__contact-card">
              <span className="gue-home__service-icon">📧</span>
              <p className="gue-moni__contact-label">Email</p>
              <a href="mailto:info@guemoni.com" className="gue-moni__contact-value">info@guemoni.com</a>
            </div>
            <div className="gue-moni__contact-card">
              <span className="gue-home__service-icon">📍</span>
              <p className="gue-moni__contact-label">Location</p>
              <p className="gue-moni__contact-value">Tarka LGA, Benue State, Nigeria</p>
            </div>
            <div className="gue-moni__contact-card">
              <span className="gue-home__service-icon">🌐</span>
              <p className="gue-moni__contact-label">Website</p>
              <a href="https://www.guemoni.com" className="gue-moni__contact-value">www.guemoni.com</a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="gue-home__footer">
        <div className="gue-home__footer-top">
          <div>
            <p className="gue-home__footer-brand">
              <img src="/brand/logo.jpeg" alt="Gue Moni Limited logo" />
              <span>Gue <em>Moni</em></span>
            </p>
            <p className="gue-home__footer-copy">
              Financial · Banking · Business Advisory · Tarka, Benue State, Nigeria
            </p>
          </div>
          <div>
            <p className="gue-home__footer-heading">Company</p>
            <div className="gue-home__footer-links">
              {footerLinks.map((link) => (
                <a key={link.label} href={link.href}>{link.label}</a>
              ))}
            </div>
          </div>
          <div>
            <p className="gue-home__footer-heading">Gue Group</p>
            <div className="gue-home__footer-links">
              <a href="https://www.guegroup.com" {...externalProps}>Gue Group Limited</a>
              <a href="https://www.gueengineering.com" {...externalProps}>GUE Engineering</a>
              <a href="https://www.guecyber.ng" {...externalProps}>Gue Cyber Nigeria</a>
              <a href="https://www.guevte.com" {...externalProps}>GUE Educational</a>
            </div>
          </div>
          <div>
            <p className="gue-home__footer-heading">Contact</p>
            <div className="gue-home__footer-links">
              <a href="tel:+2349041157068">0904 115 7068</a>
              <a href="mailto:info@guemoni.com">info@guemoni.com</a>
              <a href="#contact">Find Our Location</a>
            </div>
          </div>
        </div>
        <div className="gue-home__footer-bottom">
          <p>
            © 2026 Gue Moni Limited (RC 9853276) · Tax ID: 2620731247808 · Subsidiary of
            Gue Group Limited (RC 7501599) · Tarka LGA, Benue State, Nigeria
          </p>
        </div>
      </footer>
    </div>
  );
};

export default GueMoniLanding;
