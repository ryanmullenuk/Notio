import type { Metadata } from "next";
import { ContactForm } from "./components/ContactForm";
import { ButtonContent, MotionHeading } from "./components/MotionPrimitives";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";

export const metadata: Metadata = {
  title:
    "Notio Consulting | Life Safety & Compliance Solutions in Assisted Living & Telecare",
  description:
    "Explore Notio’s consultancy for life safety and compliance solutions in Assisted Living, Warden Call, Door Entry, Digital Switchover, and Smoke Detection. Supporting safe, independent living with expert guidance.",
  keywords: [
    "Assisted Living Consultancy",
    "Telecare Solutions",
    "Life Safety Consulting",
    "Independent Living Systems",
    "Compliance Solutions for Housing Providers",
    "Social Housing Support",
  ],
  alternates: { canonical: "/" },
};

const services = [
  {
    number: "01",
    title: "ASSISTED LIVING & WARDEN CALL",
    text: "Independent advice on emergency call, grouped living and telecare systems, from early strategy through procurement and delivery.",
    href: "/assisted-living",
  },
  {
    number: "02",
    title: "DOOR ENTRY & ACCESS CONTROL",
    text: "Clear requirements for secure, accessible entry systems across occupied housing, communal areas and individual homes.",
    href: "/door-entry-systems",
  },
  {
    number: "03",
    title: "FIRE & SMOKE DETECTION",
    text: "Practical support with domestic and communal detection requirements, surveys, specifications and delivery assurance.",
    href: "/smoke-detection-systems",
  },
  {
    number: "04",
    title: "DIGITAL SWITCHOVER 2027",
    text: "Estate readiness, risk prioritisation and transition planning for telecare and other services affected by digital migration.",
    href: "/digital-switchover-2027",
  },
  {
    number: "05",
    title: "TENDER SUPPORT",
    text: "A dedicated tender support service page is being prepared and will be added shortly.",
    href: "/tender-support",
    status: "COMING SOON",
  },
  {
    number: "06",
    title: "XLA — EXPERIENCE LEVEL AGREEMENT",
    text: "Embedded support that turns customer and team experience into clear measures, shared outcomes and a practical improvement plan.",
    href: "/xla",
    status: "COMING SOON",
  },
];

const reviews = [
  {
    title: "Expert Guidance We Can Trust",
    quote:
      "Notio has been invaluable in guiding us through complex life safety requirements…",
  },
  {
    title: "A Partner We Rely On",
    quote: "Working with Notio has been a game-changer for us…",
  },
  {
    title: "Safe and Compliant with Notio",
    quote: "We couldn’t be happier with Notio’s consultancy…",
  },
  {
    title: "Simplified Compliance for Social Housing",
    quote:
      "Notio’s team really understands the demands of life safety in social housing…",
  },
  {
    title: "Our Trusted Advisors in Life Safety",
    quote:
      "From day one, Notio impressed us with their deep knowledge and commitment to quality…",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero">
          <div className="fingerprint-field" aria-hidden="true" />
          <div className="shell hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">
                Independent life-safety consultancy since 2011
              </p>
              <div className="hero-title-lockup">
                <MotionHeading as="h1">
                  Clear decisions.
                  <br />
                  <span className="hero-highlight">Safer homes.</span>
                </MotionHeading>
              </div>
              <p className="hero-lead">
                Specialist advice for housing providers, RTM companies,
                residents and families navigating warden call, telecare, fire
                safety, door entry and digital change.
              </p>
              <div className="button-row">
                <a className="button button-yellow" href="#contact">
                  <ButtonContent label="Discuss your requirements" />
                </a>
                <a className="text-link" href="#services">
                  Explore our services
                </a>
              </div>
              <ul className="hero-proof" aria-label="Notio strengths">
                <li>Independent advice</li>
                <li>Housing-sector focus</li>
                <li>Resident-centred delivery</li>
              </ul>
            </div>

            <aside className="hero-briefing" aria-label="Notio focus areas">
              <div className="briefing-topline">
                <span>Notio / Safety brief</span>
                <span>UK</span>
              </div>
              <img
                className="briefing-mark"
                src="/assets/icon_badge_clear.png"
                alt=""
                aria-hidden="true"
              />
              <p className="briefing-label">Our purpose</p>
              <p className="briefing-statement">
                Life safety for residents.
                <br />
                Compliance for organisations.
              </p>
              <div className="briefing-intro">
                <p>
                  Assisted living is about more than technology, it’s about
                  ensuring independence, safety, and peace of mind for
                  residents, their families and for housing providers.
                </p>
                <p>
                  At Notio, we provide expert consultancy for Warden Call
                  systems tailored to social housing, independent living,
                  almshouses, right to manage (RTM) and extra care schemes.
                </p>
                <p>Learn how we can support you and your residents below.</p>
              </div>
              <div className="briefing-list">
                <span>Emergency call</span>
                <span>Fire safety</span>
                <span>Access & security</span>
                <span>Digital transition</span>
              </div>
            </aside>
          </div>
        </section>

        <section className="audiences section">
          <div className="shell">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow eyebrow-dark">Who we support</p>
                <MotionHeading as="h2">
                  Advice that fits the people and the property.
                </MotionHeading>
              </div>
              <p>
                The right solution starts with a clear understanding of risk,
                resident needs, existing assets and the organisation’s
                responsibilities.
              </p>
            </div>
            <div className="audience-grid">
              <article className="audience-card audience-card-yellow">
                <p className="card-index">A</p>
                <h3>Housing providers & local authorities</h3>
                <p>
                  Independent support for surveys, business cases,
                  specifications, procurement, compliance planning and
                  programme delivery across occupied estates.
                </p>
                <a href="#contact">Start an organisational enquiry</a>
              </article>
              <article className="audience-card">
                <p className="card-index">B</p>
                <h3>RTM, almshouses & charities</h3>
                <p>
                  Proportionate advice that turns complex technical choices
                  into a clear, costed route forward for boards and
                  decision-makers.
                </p>
                <a href="#contact">Discuss your scheme</a>
              </article>
              <article className="audience-card audience-card-dark">
                <p className="card-index">C</p>
                <h3>Residents & families</h3>
                <p>
                  Straightforward guidance when you need to understand personal
                  alarms, telecare, access, detection or safety options for a
                  relative’s home.
                </p>
                <a href="#contact">Ask for resident support</a>
              </article>
            </div>
          </div>
        </section>

        <section className="services section section-dark" id="services">
          <div className="shell">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow">Core services</p>
                <MotionHeading as="h2">
                  Independent thinking across connected safety systems.
                </MotionHeading>
              </div>
              <p>
                From one-off advice to an estate-wide programme, Notio helps
                define the need, test the options and keep delivery focused on
                safety, compliance and practical operation.
              </p>
            </div>
            <div className="service-grid">
              {services.map((service) => (
                <a
                  className="service-card motion-cursor-card"
                  href={service.href}
                  key={service.href}
                >
                  <span className="service-number">{service.number}</span>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                    {service.status ? (
                      <span className="service-status">{service.status}</span>
                    ) : null}
                  </div>
                  <span className="cursor-label" aria-hidden="true" />
                </a>
              ))}
            </div>
            <div className="capability-strip" aria-label="Additional capabilities">
              <span>Asset surveys & RAG reports</span>
              <span>Specifications & procurement</span>
              <span>Resident engagement</span>
              <span>Delivery assurance</span>
              <span>CAD & system records</span>
            </div>
          </div>
        </section>

        <section className="process section">
          <div className="shell">
            <div className="section-heading">
              <p className="eyebrow eyebrow-dark">How we work</p>
              <MotionHeading as="h2">
                Evidence first. Clear advice. A workable route forward.
              </MotionHeading>
            </div>
            <ol className="process-grid">
              <li>
                <span>01</span>
                <h3>Understand</h3>
                <p>
                  We establish the need, the people affected, the current
                  position and the decision you need to make.
                </p>
              </li>
              <li>
                <span>02</span>
                <h3>Assess</h3>
                <p>
                  We review assets, risk, compliance requirements,
                  dependencies and practical site constraints.
                </p>
              </li>
              <li>
                <span>03</span>
                <h3>Recommend</h3>
                <p>
                  You receive clear options, priorities and evidence to support
                  an informed, proportionate decision.
                </p>
              </li>
              <li>
                <span>04</span>
                <h3>Support</h3>
                <p>
                  Where needed, we stay involved through procurement, resident
                  communication, mobilisation and delivery.
                </p>
              </li>
            </ol>
          </div>
        </section>

        <section className="principle-section">
          <div className="shell principle-grid">
            <div className="principle-copy">
              <p className="eyebrow eyebrow-dark">Why Notio</p>
              <MotionHeading as="h2">
                Knowledge only matters when it leads to a better decision.
              </MotionHeading>
              <p>
                “Notio” comes from the Latin for understanding, knowledge and
                conception. It reflects a simple principle: good consultancy
                should make a complex situation clearer, not add another layer
                of noise.
              </p>
              <p>
                Our advice brings together resident safety, technical
                requirements, operational reality and commercial control.
              </p>
            </div>
            <div className="principle-panel">
              <div className="principle-logo-crop" data-scroll-panel>
                <img
                  src="/assets/icon_badge_clear.png"
                  alt="Notio shield badge"
                  width="400"
                  height="460"
                  data-scroll-media
                  data-scroll-distance="54"
                />
              </div>
              <p>
                Notio <span>/ nōtiō /</span>
              </p>
              <strong>Understanding that protects.</strong>
            </div>
          </div>
        </section>

        <section className="reviews section section-dark">
          <div className="shell">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow">Client feedback</p>
                <MotionHeading as="h2">
                  Trusted when the detail matters.
                </MotionHeading>
              </div>
              <p>
                Feedback from organisations supported by Notio across life
                safety and housing projects.
              </p>
            </div>
            <div className="review-track" data-native-scroll>
              {reviews.map((review, index) => (
                <blockquote className="review-card" key={review.title}>
                  <span className="quote-mark" aria-hidden="true">
                    “
                  </span>
                  <p>{review.quote}</p>
                  <footer>
                    <strong>{review.title}</strong>
                    <span>Client feedback / {String(index + 1).padStart(2, "0")}</span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section section" id="contact">
          <div className="shell contact-grid">
            <div className="contact-copy">
              <p className="eyebrow eyebrow-dark">Start a conversation</p>
              <MotionHeading as="h2">
                Tell us what you are trying to solve.
              </MotionHeading>
              <p>
                Whether you manage an estate, represent an RTM company or are
                looking for guidance for a family member, a short fact-find is
                the best place to start.
              </p>
              <div className="contact-direct">
                <span>Email us directly</span>
                <a href="mailto:hello@notio.uk">hello@notio.uk</a>
              </div>
              <div className="contact-note">
                <span>30</span>
                <p>
                  <strong>Free 30-minute fact-find call</strong>
                  <br />
                  A practical first conversation, without obligation.
                </p>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
