import type { Metadata } from "next";
import { MotionHeading } from "../components/MotionPrimitives";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Privacy Policy | Notio Consulting",
  description:
    "Learn about Notio Consulting’s privacy policy, including data collection, usage, and your rights. We protect your data and maintain transparency in all client interactions.",
  keywords: [
    "Privacy Policy",
    "Data Protection",
    "Data Usage Policy",
    "User Privacy Rights",
    "GDPR Compliance",
    "Notio Consulting Privacy Policy",
  ],
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <SiteHeader />
      <main className="policy-main">
        <section className="policy-hero">
          <div className="shell">
            <p className="eyebrow">Privacy & data</p>
            <MotionHeading as="h1">Privacy policy</MotionHeading>
            <p>
              How Notio Consulting handles personal information when you use
              this website or contact us.
            </p>
            <span>Last updated: 27 July 2026</span>
          </div>
        </section>
        <div className="shell policy-layout">
          <aside>
            <p>On this page</p>
            <a href="#who-we-are">Who we are</a>
            <a href="#information">Information we collect</a>
            <a href="#use">How we use it</a>
            <a href="#sharing">Sharing and retention</a>
            <a href="#rights">Your rights</a>
            <a href="#cookies">Cookies and storage</a>
            <a href="#contact-privacy">Contact</a>
          </aside>
          <article className="policy-content">
            <section id="who-we-are">
              <h2>1. Who we are</h2>
              <p>
                Notio Consulting provides independent advisory services across
                life safety, assisted living, telecare, fire safety, door entry
                and related housing systems.
              </p>
              <p>
                For the personal information described in this policy, Notio
                Consulting acts as the data controller unless a client contract
                states otherwise.
              </p>
            </section>
            <section id="information">
              <h2>2. Information we collect</h2>
              <p>We may receive information when you contact us, including:</p>
              <ul>
                <li>Your name, email address and telephone number.</li>
                <li>Your organisation, role and enquiry type.</li>
                <li>
                  Information you include in an email, enquiry, meeting or
                  project document.
                </li>
                <li>
                  Basic technical information generated when the website is
                  accessed, such as security and server logs.
                </li>
              </ul>
              <p>
                Please do not include sensitive personal information in an
                initial website enquiry unless it is necessary. If you need to
                discuss an individual resident’s circumstances, start with a
                general description and we will agree an appropriate way to
                handle the information.
              </p>
            </section>
            <section id="use">
              <h2>3. How and why we use information</h2>
              <p>We use personal information to:</p>
              <ul>
                <li>Respond to enquiries and arrange conversations.</li>
                <li>Prepare, manage and deliver agreed consultancy services.</li>
                <li>Maintain commercial, project and financial records.</li>
                <li>Protect the website, our systems and our legal position.</li>
                <li>Meet legal, regulatory and contractual obligations.</li>
              </ul>
              <p>
                Depending on the circumstances, our lawful basis will normally
                be taking steps before entering a contract, performing a
                contract, meeting a legal obligation or pursuing a legitimate
                business interest that does not override your rights.
              </p>
            </section>
            <section id="sharing">
              <h2>4. Sharing, transfers and retention</h2>
              <p>
                We do not sell personal information. We may share information
                with trusted service providers, professional advisers,
                contractors or a client where this is necessary for the stated
                purpose and appropriate safeguards are in place.
              </p>
              <p>
                Some technology providers may process information outside the
                UK. Where this applies, we will use an appropriate transfer
                mechanism and contractual protection.
              </p>
              <p>
                Information is kept only for as long as needed for the enquiry,
                service, legal requirement or legitimate record-keeping
                purpose. Retention periods may vary according to the type of
                project, contract and information involved.
              </p>
            </section>
            <section id="rights">
              <h2>5. Your data protection rights</h2>
              <p>
                Subject to the circumstances and any legal exemptions, you may
                have the right to:
              </p>
              <ul>
                <li>Ask for a copy of your personal information.</li>
                <li>Ask us to correct inaccurate or incomplete information.</li>
                <li>Ask us to erase or restrict the use of information.</li>
                <li>Object to processing based on legitimate interests.</li>
                <li>Request transfer of information in a portable format.</li>
                <li>Withdraw consent where consent is the lawful basis.</li>
              </ul>
              <p>
                You can also complain to the Information Commissioner’s Office.
                We would welcome the opportunity to address the concern first.
              </p>
            </section>
            <section id="cookies">
              <h2>6. Cookies and browser storage</h2>
              <p>
                This version of the website does not use advertising or
                marketing cookies and does not use browser storage to track
                visitors.
              </p>
              <p>
                If analytics, embedded booking tools or additional cookies are
                introduced later, this policy and any consent controls will be
                updated before those tools are used.
              </p>
            </section>
            <section id="contact-privacy">
              <h2>7. Contact</h2>
              <p>
                Questions or requests about privacy can be sent to{" "}
                <a href="mailto:hello@notio.uk">hello@notio.uk</a>.
              </p>
            </section>
          </article>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
