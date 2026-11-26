import { Link } from "react-router-dom";
import Icon from "./Icon";
export function ButtonLink({ to, children, secondary = false }) {
  return (
    <Link className={`button${secondary ? " button-outline" : ""}`} to={to}>
      {children}
      <Icon size={18} />
    </Link>
  );
}
export function PageIntro({ eyebrow, title, children }) {
  return (
    <section className="page-intro">
      <div className="container">
        <div className="breadcrumbs">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>{eyebrow}</span>
        </div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="intro-copy">{children}</p>
      </div>
    </section>
  );
}
export function CallToAction() {
  return (
    <section className="cta-section">
      <div className="container cta-inner">
        <div>
          <p className="eyebrow">CLOSER THAN YOU THINK</p>
          <h2>
            Your next banking stop?
            <br />
            Right in your neighbourhood.
          </h2>
        </div>
        <ButtonLink to="/contact">Find our agent point</ButtonLink>
      </div>
    </section>
  );
}
export const services = [
  {
    icon: "wallet",
    title: "Cash deposits & withdrawals",
    description:
      "Cash in or cash out, without the long trip. Access your money at a familiar place in your community.",
    bring:
      "Bring your card or account details and ask about the applicable fee and limit.",
  },
  {
    icon: "transfer",
    title: "Money transfers",
    description:
      "Send money to family, friends, or business partners through our agent point. Simple, supported, and close by.",
    bring:
      "Have the recipient’s bank name and account number ready. Verify their name before confirming.",
  },
  {
    icon: "bank",
    title: "Account opening",
    description:
      "Your next chapter starts with an account. Get help opening a UBA account, right here in your neighbourhood.",
    bring:
      "Prepare a valid ID, passport photograph, registered phone number, and your address.",
  },
  {
    icon: "shield",
    title: "BVN enrolment",
    description:
      "Take the next step towards financial access. Speak to our team about Bank Verification Number enrolment.",
    bring:
      "Call ahead to confirm enrolment availability and current identification requirements.",
  },
  {
    icon: "card",
    title: "Debit card support",
    description:
      "Speak to our team about UBA debit card issuance when opening your account through our agent point.",
    bring: "Ask our team about card availability and the account requirements.",
  },
  {
    icon: "receipt",
    title: "Bills & airtime",
    description:
      "Keep your everyday essentials running. Get help with electricity, television subscriptions, airtime, and more.",
    bring:
      "Bring your customer reference, meter number, or the phone number you want to recharge.",
  },
];
export function ServiceCard({ service, number, detailed = false }) {
  return (
    <article className="service-card">
      <div className="service-top">
        <span className="icon-box">
          <Icon name={service.icon} size={26} />
        </span>
        <span className="card-number">0{number}</span>
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      {detailed ? (
        <div className="service-note">
          <strong>Before you visit</strong>
          <p>{service.bring}</p>
        </div>
      ) : (
        <Link className="text-link" to="/services">
          Explore service <Icon size={17} />
        </Link>
      )}
    </article>
  );
}
