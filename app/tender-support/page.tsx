import type { Metadata } from "next";
import { ButtonContent, MotionHeading } from "../components/MotionPrimitives";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Tender Support | Coming Soon | Notio Consulting",
  description:
    "Notio Consulting’s Tender Support service page is being prepared. Contact Notio to discuss an immediate tender support requirement.",
  alternates: { canonical: "/tender-support" },
};

export default function TenderSupportPage() {
  return (
    <>
      <SiteHeader />
      <main className="coming-soon-main">
        <section className="coming-soon-hero">
          <div className="fingerprint-field" aria-hidden="true" />
          <div className="shell coming-soon-grid">
            <div>
              <p className="eyebrow">Notio service / 05</p>
              <MotionHeading as="h1">TENDER SUPPORT</MotionHeading>
            </div>
            <div className="coming-soon-panel">
              <span>COMING SOON</span>
              <p>
                Detailed content for this service is being prepared. If you
                have an immediate tender support requirement, you can still
                contact Notio to arrange an initial discussion.
              </p>
              <a className="button button-yellow" href="/#contact">
                <ButtonContent label="Discuss a requirement" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
