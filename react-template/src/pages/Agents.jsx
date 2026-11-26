import { PageIntro, ButtonLink } from "../components/Shared";
import Icon from "../components/Icon";
export default function Agents() {
  return (
    <>
      <PageIntro
        eyebrow="Become an agent"
        title={
          <>
            Grow your business.
            <br />
            <em>Serve your community.</em>
          </>
        }
      >
        Make your business a place for more possibilities. Join our sub-agent
        network and help bring essential banking closer to your neighbours.
      </PageIntro>
      <section className="section">
        <div className="container split-grid">
          <div className="split-copy">
            <p className="eyebrow">A PARTNERSHIP THAT WORKS LOCALLY</p>
            <h2>
              Build on the trust
              <br />
              you already have.
            </h2>
            <p>
              Already running a business in Tarka or the surrounding
              communities? Add agency banking services to your offering with
              onboarding guidance and operational support from Gue Moni.
            </p>
            <ul className="check-list">
              {[
                "Earn commissions on eligible transactions",
                "Receive onboarding and terminal guidance",
                "Get support with everyday agent operations",
                "Help your customers bank closer to home",
              ].map((item) => (
                <li key={item}>
                  <Icon name="check" size={18} />
                  {item}
                </li>
              ))}
            </ul>
            <ButtonLink to="/contact?interest=agent">
              Enquire about becoming an agent
            </ButtonLink>
          </div>
          <div className="requirements-panel">
            <p className="eyebrow">LET’S GET YOU READY</p>
            <h3>A few things to prepare.</h3>
            {[
              [
                "01",
                "A verifiable business location",
                "An established place where customers can find you.",
              ],
              [
                "02",
                "Business registration & valid ID",
                "Your CAC business documents and a valid means of identification.",
              ],
              [
                "03",
                "A working phone number",
                "Contact details for onboarding and ongoing support.",
              ],
              [
                "04",
                "A conversation with our team",
                "We’ll explain account setup, float, fees, and current programme requirements.",
              ],
            ].map(([num, title, copy]) => (
              <div className="requirement" key={num}>
                <span>{num}</span>
                <div>
                  <h4>{title}</h4>
                  <p>{copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-tinted">
        <div className="container">
          <p className="eyebrow">YOUR NEXT CHAPTER</p>
          <h2>Three steps to get started.</h2>
          <div className="service-grid steps">
            {[
              [
                "01",
                "Say hello",
                "Tell us about your business, location, and interest in agency banking.",
              ],
              [
                "02",
                "Get the details",
                "Our team will walk you through eligibility, documents, and the onboarding process.",
              ],
              [
                "03",
                "Get ready to serve",
                "Complete the required checks and training before starting your agent operations.",
              ],
            ].map(([num, title, copy]) => (
              <article key={num}>
                <span>{num}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
          <p className="fine-print">
            Applications are subject to eligibility checks and approval.
            Commission rates and terminal terms will be confirmed during
            onboarding.
          </p>
        </div>
      </section>
    </>
  );
}
