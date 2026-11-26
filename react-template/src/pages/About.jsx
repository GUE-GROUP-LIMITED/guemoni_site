import { PageIntro, CallToAction } from "../components/Shared";
import Icon from "../components/Icon";
export default function About() {
  return (
    <>
      <PageIntro
        eyebrow="About us"
        title={
          <>
            Local roots.
            <br />
            <em>Shared possibilities.</em>
          </>
        }
      >
        We’re Gue Moni. A local team making everyday financial services more
        accessible to the communities we call home.
      </PageIntro>
      <section className="section">
        <div className="container split-grid">
          <div className="about-photo">
            <img
              src="/media/1%20(6).jpeg"
              alt="A member of the Gue Moni team at our office"
              loading="lazy"
            />
          </div>
          <div className="split-copy">
            <p className="eyebrow">OUR STORY</p>
            <h2>
              Built here.
              <br />
              For the people here.
            </h2>
            <p>
              Gue Moni Limited is the financial inclusion subsidiary of Gue
              Group Limited. Based in Tarka, Benue State, we connect people and
              small businesses to everyday banking through the UBA Moni agency
              banking network.
            </p>
            <p>
              Our purpose is simple: make essential financial services easier to
              reach. From a farmer receiving a payment to a trader opening an
              account, we’re here to help our neighbours take their next step.
            </p>
            <p>Gue Moni Limited is registered in Nigeria under RC 9853276.</p>
          </div>
        </div>
      </section>
      <section className="section section-tinted">
        <div className="container">
          <p className="eyebrow">WHAT GUIDES US</p>
          <h2>
            People at the centre.
            <br />
            Always.
          </h2>
          <div className="service-grid values">
            {[
              [
                "pin",
                "Access for everyone",
                "Financial services belong in our communities. We work to close the distance between people and everyday banking.",
              ],
              [
                "shield",
                "Care in every transaction",
                "Clear communication, careful processes, and responsible service are part of how we work every day.",
              ],
              [
                "people",
                "Growth we share",
                "When local businesses grow, communities grow. We help create opportunities through our sub-agent network.",
              ],
            ].map(([icon, title, copy]) => (
              <article className="service-card" key={title}>
                <span className="icon-box">
                  <Icon name={icon} />
                </span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">THE JOURNEY SO FAR</p>
              <h2>
                Small beginnings.
                <br />A lasting commitment.
              </h2>
            </div>
          </div>
          <div className="timeline">
            {[
              [
                "2024",
                "A shared foundation",
                "Gue Group Limited was incorporated, creating a platform for businesses across multiple sectors.",
              ],
              [
                "March 2026",
                "Banking comes closer",
                "Agency banking operations began under GUE Engineering through the UBA Moni Super Agent programme.",
              ],
              [
                "September 2026",
                "A dedicated purpose",
                "Gue Moni Limited was incorporated to focus on financial inclusion and agency banking.",
              ],
            ].map(([date, title, copy]) => (
              <article key={date}>
                <span>{date}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CallToAction />
    </>
  );
}
