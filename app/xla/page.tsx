import type { Metadata } from "next";
import { ButtonContent, MotionHeading } from "../components/MotionPrimitives";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "XLA Consulting | Experience Level Agreement | Notio",
  description:
    "Notio’s XLA service embeds within sales, service, customer experience and operations teams to understand what success feels like and build a practical improvement plan.",
  alternates: { canonical: "/xla" },
};

const engagementStages = [
  {
    title: "Embed & understand",
    text: "We work within the business for one to six months, spending time with sales, service, customer experience and operations teams to understand the reality behind the process.",
  },
  {
    title: "Listen & gather evidence",
    text: "We review processes and protocols, speak with the people delivering them and help gather meaningful insight from the customers experiencing them.",
  },
  {
    title: "Define success",
    text: "We establish what a successful experience looks like to customers, the business and the teams responsible for delivery, then turn it into clear shared outcomes.",
  },
  {
    title: "Plan & improve",
    text: "We identify the gaps between today’s experience and the agreed goal, then build a practical plan with measures, ownership and priorities that teams can act on.",
  },
];

const outputs = [
  "Current customer and team experience assessment",
  "Process, protocol and operational gap review",
  "Customer insight and satisfaction framework",
  "Agreed definition of a successful experience",
  "Experience measures and reporting approach",
  "Prioritised improvement plan with clear ownership",
];

const considerations = [
  "The customer groups and journeys that matter most",
  "How customer feedback is currently gathered and used",
  "The experience promised by sales and delivered by operations",
  "Processes, handovers and protocols that shape the outcome",
  "What success means to customers, leaders and frontline teams",
  "The measures, ownership and behaviours needed to sustain change",
];

export default function XlaPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="service-hero xla-hero">
          <div className="fingerprint-field" aria-hidden="true" />
          <div className="shell service-hero-grid">
            <div className="xla-hero-copy">
              <p className="eyebrow">Notio service / 06</p>
              <MotionHeading as="h1">XLA</MotionHeading>
              <p className="xla-subtitle">Experience Level Agreement</p>
              <span className="xla-status">COMING SOON</span>
              <p className="service-intro">
                Embedded consultancy that helps a business understand the
                experience it creates, agree what success looks like and build
                a practical route towards it.
              </p>
              <div className="button-row">
                <a className="button button-yellow" href="/#contact">
                  <ButtonContent label="Discuss an XLA engagement" />
                </a>
                <a
                  className="text-link text-link-light"
                  href="mailto:hello@notio.uk"
                >
                  hello@notio.uk
                </a>
              </div>
            </div>

            <div className="service-code">
              <div className="service-code-top">
                <span>Notio service</span>
                <strong>06 / XLA</strong>
              </div>
              <div
                className="service-icon-frame xla-icon-frame"
                role="img"
                aria-label="Outlined XLA mark"
                data-scroll-panel
              >
                <div
                  className="xla-mark"
                  aria-hidden="true"
                  data-scroll-media
                  data-scroll-distance="56"
                >
                  <span>X</span>
                  <strong>LA</strong>
                </div>
              </div>
              <p>
                Move beyond whether a service was delivered on time and
                understand whether it created the experience your customer and
                your teams expected.
              </p>
            </div>
          </div>
        </section>

        <section className="section xla-definition">
          <div className="shell">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow eyebrow-dark">What XLA means</p>
                <MotionHeading as="h2">
                  Measure the experience, not only the activity.
                </MotionHeading>
              </div>
              <p>
                An Experience Level Agreement focuses on how a service is
                experienced by the people receiving and delivering it. It
                complements operational service measures by making satisfaction,
                confidence, effort and outcomes part of the agreement.
              </p>
            </div>

            <div className="xla-comparison">
              <article>
                <span>SLA</span>
                <h3>Service Level Agreement</h3>
                <p>
                  Measures whether agreed service activities were completed:
                  response times, availability, resolution and other operational
                  targets.
                </p>
                <strong>Did we deliver the agreed service?</strong>
              </article>
              <article className="xla-comparison-highlight">
                <span>XLA</span>
                <h3>Experience Level Agreement</h3>
                <p>
                  Measures whether the service produced the intended experience
                  and outcome for the customer, the business and the teams
                  delivering it.
                </p>
                <strong>Did the service feel successful?</strong>
              </article>
            </div>
          </div>
        </section>

        <section className="section service-support">
          <div className="shell">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow eyebrow-dark">How we work</p>
                <MotionHeading as="h2">
                  Inside the business, close to the experience.
                </MotionHeading>
              </div>
              <p>
                The engagement normally runs for one to six months. The exact
                scope depends on the customer journey, the teams involved and
                the evidence already available.
              </p>
            </div>
            <div className="support-grid">
              {engagementStages.map((stage, index) => (
                <article key={stage.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{stage.title}</h3>
                  <p>{stage.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-yellow">
          <div className="shell deliverable-grid">
            <div>
              <p className="eyebrow eyebrow-dark">What you can receive</p>
              <MotionHeading as="h2">
                Evidence, measures and a route forward.
              </MotionHeading>
            </div>
            <ul className="tick-list">
              {outputs.map((item) => (
                <li key={item}>
                  <span className="tick-mark" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section service-considerations">
          <div className="shell considerations-grid">
            <div>
              <p className="eyebrow eyebrow-dark">The starting point</p>
              <MotionHeading as="h2">
                Understand what is promised, delivered and experienced.
              </MotionHeading>
            </div>
            <ul>
              {considerations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="shell service-note">
            <strong>Practical position</strong>
            <div>
              <p>
                An XLA is not a replacement for every SLA. It adds the customer
                and team experience to the operational picture, so performance
                is judged against the outcome that actually matters.
              </p>
            </div>
          </div>
        </section>

        <section className="service-cta">
          <div className="shell service-cta-inner">
            <div>
              <p className="eyebrow">Register your interest</p>
              <MotionHeading as="h2">
                Start with a conversation about the experience you want to
                create.
              </MotionHeading>
            </div>
            <div className="xla-cta-mark" aria-hidden="true">
              <span>X</span>
              <strong>LA</strong>
            </div>
            <a className="button button-yellow" href="/#contact">
              <ButtonContent label="Discuss XLA" />
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
