import { Link } from "react-router-dom";
import {
  PageIntro,
  CallToAction,
  ServiceCard,
  services,
} from "../components/Shared";
export default function Services() {
  return (
    <>
      <PageIntro
        eyebrow="Our services"
        title={
          <>
            Everyday banking.
            <br />
            <em>Made more local.</em>
          </>
        }
      >
        The essentials you need, with people ready to help. Explore the
        financial services available through our UBA Moni agent point.
      </PageIntro>
      <section className="section">
        <div className="container">
          <div className="service-grid">
            {services.map((service, i) => (
              <ServiceCard
                key={service.title}
                service={service}
                number={i + 1}
                detailed
              />
            ))}
          </div>
          <div className="info-note">
            <strong>A little preparation goes a long way.</strong>
            <p>
              Services are subject to availability and verification. Ask our
              team to confirm applicable fees and transaction limits before you
              proceed. Never share your PIN or one-time password.
            </p>
            <Link to="/faq" className="text-link">
              Have a question? Visit our FAQs →
            </Link>
          </div>
        </div>
      </section>
      <CallToAction />
    </>
  );
}
