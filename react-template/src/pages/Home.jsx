import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import {
  ButtonLink,
  CallToAction,
  ServiceCard,
  services,
} from "../components/Shared";
export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="tiny-line" /> YOUR COMMUNITY. YOUR BANKING.
            </p>
            <h1>
              Banking,
              <br />
              <em>closer to home.</em>
            </h1>
            <p>
              Life moves locally. Your banking should too. From everyday
              payments to new possibilities, Gue Moni brings financial services
              to your neighbourhood.
            </p>
            <div className="button-row">
              <ButtonLink to="/services">Explore our services</ButtonLink>
              <Link to="/become-agent" className="text-link">
                Become an agent <Icon size={17} />
              </Link>
            </div>
            <div className="hero-location">
              <Icon name="pin" size={17} />
              <span>Rooted in Tarka. Here for our communities.</span>
            </div>
          </div>
          <div className="hero-visual">
            <img
              className="hero-image"
              src="/media/1%20(11).jpeg"
              alt="The Gue Moni banking premises in Tarka, Benue State"
              fetchPriority="high"
            />
            <div className="image-label">
              <span className="status-dot" /> LOCAL PEOPLE. REAL CONNECTIONS.
            </div>
            <div className="hero-floating">
              <span className="icon-box">
                <Icon name="bank" size={29} />
              </span>
              <div>
                <strong>
                  A familiar place.
                  <br />A simpler way to bank.
                </strong>
                <span>Tarka, Benue State</span>
              </div>
              <Link to="/contact" aria-label="Find our agent point">
                <Icon size={22} />
              </Link>
            </div>
            <div className="photo-caption">
              01 / BANKING IN YOUR NEIGHBOURHOOD
            </div>
          </div>
        </div>
      </section>
      <section className="trust-strip" aria-label="Our approach">
        <div className="container trust-inner">
          <div className="network-label">
            <span>CONNECTED THROUGH</span>
            <strong>
              UBA <span>Moni</span>
              <i>Agent network</i>
            </strong>
          </div>
          <div>
            <Icon name="shield" />
            <span>Secure transactions</span>
          </div>
          <div>
            <Icon name="people" />
            <span>People-first support</span>
          </div>
          <div>
            <Icon name="pin" />
            <span>Local convenience</span>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">EVERYDAY NEEDS, SIMPLY SORTED</p>
              <h2>
                A little less distance.
                <br />A lot more convenience.
              </h2>
            </div>
            <Link to="/services" className="text-link">
              View all services <Icon size={18} />
            </Link>
          </div>
          <div className="service-grid">
            {services.slice(0, 3).map((service, i) => (
              <ServiceCard
                key={service.title}
                service={service}
                number={i + 1}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="section about-section">
        <div className="container split-grid">
          <div className="about-photo">
            <img
              src="/media/1%20(2).jpeg"
              alt="Customer seating and service counter at our local agent point"
              loading="lazy"
            />
            <span className="photo-tag">
              Here for you. Right here in Tarka.
            </span>
          </div>
          <div className="split-copy">
            <p className="eyebrow">MORE THAN A TRANSACTION</p>
            <h2>
              Good banking starts
              <br />
              with knowing you.
            </h2>
            <p>
              We believe access to financial services should be part of everyday
              life. That’s why we’re building a more connected community, one
              conversation and one transaction at a time.
            </p>
            <p>
              As a Gue Group company operating through the UBA Moni network, we
              bring local understanding to the banking services you need.
            </p>
            <Link to="/about" className="text-link">
              Get to know Gue Moni <Icon size={18} />
            </Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container agent-banner">
          <div>
            <p className="eyebrow">GROW WITH YOUR COMMUNITY</p>
            <h2>
              Your business.
              <br />
              An even bigger opportunity.
            </h2>
            <p>
              Bring banking to your neighbourhood. Become a Gue Moni sub-agent
              and add a new source of income to your business.
            </p>
            <ButtonLink to="/become-agent">
              Let’s build something together
            </ButtonLink>
          </div>
          <div className="agent-benefits">
            {[
              [
                "wallet",
                "More ways to earn",
                "Earn commissions on eligible banking transactions.",
              ],
              [
                "people",
                "Support at every step",
                "Get guidance on onboarding and daily operations.",
              ],
              [
                "bank",
                "Make a local difference",
                "Help more people access everyday financial services.",
              ],
            ].map(([icon, title, copy]) => (
              <div key={title}>
                <Icon name={icon} size={26} />
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CallToAction />
    </>
  );
}
