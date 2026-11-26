import { Link } from "react-router-dom";
import { PageIntro, CallToAction } from "../components/Shared";
const faqs = [
  [
    "What is Gue Moni?",
    "Gue Moni Limited is a Gue Group company providing agency banking services through the UBA Moni network in Tarka, Benue State. We help local customers access everyday financial services.",
  ],
  [
    "Which services can I access?",
    "Our services include cash deposits and withdrawals, money transfers, UBA account opening, bill payments, BVN enrolment support, and debit card support. Contact us to confirm availability before visiting.",
  ],
  [
    "Where can I find your agent point?",
    "Find us behind Township Hall, Wannune 981107, Benue State. Our Google Maps Plus Code is HVCH+7M Wannune. Call 0904 115 7068 for directions and current opening hours.",
  ],
  [
    "What do I need to open an account?",
    "Prepare a valid means of identification, a recent passport photograph, your registered phone number, and your address. Our team will confirm the current KYC requirements for your account.",
  ],
  [
    "Can I transfer money to another bank?",
    "Yes. Our team can help with transfers to supported Nigerian banks. Bring the recipient’s bank name and account number, and verify the account name before confirming.",
  ],
  [
    "How much does a transaction cost?",
    "Charges and limits depend on the service and transaction amount. Ask the agent for the applicable fee before proceeding.",
  ],
  [
    "How can I become a sub-agent?",
    "Start by contacting our team with your business name, location, and contact details. We’ll explain eligibility, documentation, training, and the onboarding process.",
  ],
  [
    "What should I do if a transaction has a problem?",
    "Keep your receipt or transaction reference and contact our team as soon as possible. Never send your PIN, password, or one-time password when asking for help.",
  ],
];
export default function Faq() {
  return (
    <>
      <PageIntro
        eyebrow="Frequently asked questions"
        title={
          <>
            A little clarity.
            <br />
            <em>A lot more confidence.</em>
          </>
        }
      >
        Find answers to common questions about banking with Gue Moni and joining
        our agent network.
      </PageIntro>
      <section className="section">
        <div className="container faq-layout">
          <aside>
            <p className="eyebrow">WE’RE HERE TO HELP</p>
            <h2>
              Still have
              <br />a question?
            </h2>
            <p>
              Some things are easier with a conversation. Our team is ready to
              help.
            </p>
            <Link to="/contact" className="text-link">
              Talk to us →
            </Link>
          </aside>
          <div className="faq-list">
            {faqs.map(([q, a]) => (
              <details key={q}>
                <summary>
                  {q}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <CallToAction />
    </>
  );
}
