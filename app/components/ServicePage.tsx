import { ButtonContent, MotionHeading } from "./MotionPrimitives";
import { SiteFooter, SiteHeader } from "./SiteChrome";

type ServicePageProps = {
  code: string;
  eyebrow: string;
  title: string;
  intro: string;
  statement: string;
  iconSrc: string;
  iconAlt: string;
  supports: { title: string; text: string }[];
  deliverables: string[];
  considerations: string[];
  noteTitle?: string;
  note?: React.ReactNode;
};

export function ServicePage({
  code,
  eyebrow,
  title,
  intro,
  statement,
  iconSrc,
  iconAlt,
  supports,
  deliverables,
  considerations,
  noteTitle,
  note,
}: ServicePageProps) {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="service-hero">
          <div className="fingerprint-field" aria-hidden="true" />
          <div className="shell service-hero-grid">
            <div>
              <p className="eyebrow">{eyebrow}</p>
              <MotionHeading as="h1">{title}</MotionHeading>
              <p className="service-intro">{intro}</p>
              <div className="button-row">
                <a className="button button-yellow" href="/#contact">
                  <ButtonContent label="Discuss your requirements" />
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
                <strong>{code}</strong>
              </div>
              <div className="service-icon-frame" data-scroll-panel>
                <img
                  src={iconSrc}
                  alt={iconAlt}
                  data-scroll-media
                  data-scroll-distance="72"
                />
              </div>
              <p>{statement}</p>
            </div>
          </div>
        </section>

        <section className="section service-support">
          <div className="shell">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow eyebrow-dark">Where we support</p>
                <MotionHeading as="h2">
                  Clear advice at the points that matter.
                </MotionHeading>
              </div>
              <p>
                The scope is shaped around the decision, the estate and the
                evidence available. Support can cover a single scheme or form
                part of a wider investment programme.
              </p>
            </div>
            <div className="support-grid">
              {supports.map((item, index) => (
                <article key={item.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
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
                Useful outputs, built for a decision.
              </MotionHeading>
            </div>
            <ul className="tick-list">
              {deliverables.map((item) => (
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
              <p className="eyebrow eyebrow-dark">Practical considerations</p>
              <MotionHeading as="h2">
                What needs to be understood before a solution is fixed.
              </MotionHeading>
            </div>
            <ul>
              {considerations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          {note ? (
            <div className="shell service-note">
              <strong>{noteTitle ?? "Important"}</strong>
              <div>{note}</div>
            </div>
          ) : null}
        </section>

        <section className="service-cta">
          <div className="shell service-cta-inner">
            <div>
              <p className="eyebrow">A practical first step</p>
              <MotionHeading as="h2">
                Start with a free 30-minute fact-find call.
              </MotionHeading>
            </div>
            <div
              className="service-cta-icon"
              aria-hidden="true"
              data-scroll-panel
            >
              <img
                src="/assets/fact_find_call_dark.png"
                alt=""
                data-scroll-media
                data-scroll-distance="42"
              />
            </div>
            <a className="button button-yellow" href="/#contact">
              <ButtonContent label="Arrange a conversation" />
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
