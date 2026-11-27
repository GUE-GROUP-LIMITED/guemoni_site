import { Link, useSearchParams } from "react-router-dom";
import { useState } from "react";
import Image from "next/image";
import { PageIntro } from "../components/Shared";
import Icon from "../components/Icon";
export default function Contact() {
  const [params] = useSearchParams();
  const [result, setResult] = useState({ state: "idle", message: "" });
  async function submit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form));
    setResult({ state: "sending", message: "" });
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (!response.ok)
        throw new Error(
          data.error || "We couldn’t send your enquiry. Please try again.",
        );
      setResult({
        state: "success",
        message:
          "Thank you. Your enquiry has been received. Our team will be in touch.",
      });
      form.reset();
    } catch (error) {
      setResult({
        state: "error",
        message: error.message || "Please try again or call our team.",
      });
    }
  }
  return (
    <>
      <PageIntro
        eyebrow="Contact & locations"
        title={
          <>
            Let’s make banking
            <br />
            <em>a little more personal.</em>
          </>
        }
      >
        Need directions, help with a service, or information about becoming an
        agent? Start with a conversation.
      </PageIntro>
      <section className="section">
        <div className="container contact-layout">
          <div className="contact-details">
            <p className="eyebrow">COME SAY HELLO</p>
            <h2>
              Local people.
              <br />
              Ready to help.
            </h2>
            {[
              [
                "pin",
                "Visit our agent point",
                "Opposite PDP office, Wannune 981107, Benue State, Nigeria",
                null,
              ],
              [
                "phone",
                "Give us a call",
                "0913 875 1997",
                "tel:+2349138751997",
              ],
              [
                "mail",
                "Send an email",
                "info@guemoni.com",
                "mailto:info@guemoni.com",
              ],
            ].map(([icon, title, value, href]) => (
              <div className="contact-item" key={title}>
                <Icon name={icon} size={23} />
                <div>
                  <h3>{title}</h3>
                  {href ? <a href={href}>{value}</a> : <p>{value}</p>}
                </div>
              </div>
            ))}
            <p className="visit-note">
              Plus Code: HV7P+C4R Wannune. Please call ahead to confirm opening
              hours and service availability.
            </p>
            <Image
              className="contact-photo"
              src="/media/tarka-agent-point.jpeg"
              alt="The exterior of our local banking premises"
              width={4160}
              height={1872}
              sizes="(max-width: 600px) calc(100vw - 40px), (max-width: 850px) 45vw, 480px"
              quality={85}
            />
          </div>
          <form className="contact-form" onSubmit={submit}>
            <p className="eyebrow">HOW CAN WE HELP?</p>
            <h3>Send us an enquiry.</h3>
            <p>Leave your details and a little about what you need.</p>
            <div className="form-grid">
              <label>
                Full name
                <input
                  name="name"
                  autoComplete="name"
                  required
                  minLength={2}
                  maxLength={120}
                  placeholder="Your full name"
                />
              </label>
              <label>
                Email address
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="you@example.com"
                />
              </label>
              <label>
                Phone number
                <input
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  maxLength={40}
                  placeholder="Your phone number"
                />
              </label>
              <label>
                I’m interested in
                <select
                  name="service"
                  defaultValue={
                    params.get("interest") === "agent"
                      ? "Agent Onboarding"
                      : "General Enquiry"
                  }
                >
                  <option>General Enquiry</option>
                  <option>Agent Onboarding</option>
                  <option>Cash Deposits & Withdrawals</option>
                  <option>Money Transfers</option>
                  <option>Account Opening</option>
                  <option>BVN Enrolment</option>
                  <option>Bills & Airtime</option>
                  <option>Debit Card Support</option>
                  <option>Transaction Support</option>
                </select>
              </label>
              <label className="full-width">
                Your message
                <textarea
                  name="message"
                  rows={5}
                  required
                  minLength={20}
                  maxLength={3000}
                  placeholder="Tell us how we can help (at least 20 characters)"
                />
              </label>
            </div>
            <div className="honeypot" aria-hidden="true">
              <label>
                Leave this empty
                <input name="website" tabIndex={-1} autoComplete="off" />
              </label>
            </div>
            <p className="form-privacy">
              We’ll use your details to respond to your enquiry. Please don’t
              include account passwords, PINs, or one-time passwords.
            </p>
            <button
              className="button"
              disabled={result.state === "sending"}
              type="submit"
            >
              {result.state === "sending" ? "Sending…" : "Send enquiry"}
              <Icon size={18} />
            </button>
            <div aria-live="polite" className={`form-result ${result.state}`}>
              {result.message}
            </div>
          </form>
        </div>
      </section>
      <section className="location-section" aria-labelledby="location-title">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">FIND US IN TARKA</p>
              <h2 id="location-title">Closer to your community.</h2>
              <p className="map-description">Find us opposite PDP office, Wannune 981107, Benue State. Plus Code: HV7P+C4R Wannune.</p>
            </div>
            <a className="text-link" href="https://maps.app.goo.gl/Ld2dbxQJau7HKfrb7?g_st=ic" target="_blank" rel="noreferrer">
              Open in Google Maps <Icon size={18} />
            </a>
          </div>
          <iframe
            className="location-map"
            title="Gue Moni office opposite PDP office, Wannune"
            src="https://maps.google.com/maps?q=HV7P%2BC4R%20Wannune%2C%20Benue%2C%20Nigeria&z=17&output=embed"
            width="1200"
            height="400"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
      <section className="help-strip">
        <div className="container">
          <div>
            <h3>A quick answer might be closer than you think.</h3>
            <p>Explore our answers to the questions we hear most often.</p>
          </div>
          <Link to="/faq" className="text-link">
            Read our FAQs <Icon size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
