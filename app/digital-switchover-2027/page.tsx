import type { Metadata } from "next";
import { ServicePage } from "../components/ServicePage";

export const metadata: Metadata = {
  title: "Digital Switchover 2027 Support | Notio Consulting for Housing Providers",
  description:
    "Prepare for the 2027 BT analogue to digital switchover with Notio. Expert guidance for housing providers in upgrading and integrating digital telecare and emergency call systems.",
  keywords: [
    "Digital Switchover 2027",
    "Analogue to Digital Transition",
    "Telecare System Upgrades",
    "Housing Provider Digital Support",
    "BT Digital Switchover Consultancy",
    "Compliance for Housing Authorities",
  ],
  alternates: { canonical: "/digital-switchover-2027" },
};

export default function DigitalSwitchoverPage() {
  return (
    <ServicePage
      code="04 / DS"
      eyebrow="Digital switchover 2027"
      title="Move from analogue without losing sight of the resident."
      intro="Readiness, risk and migration support for housing providers and organisations responsible for telecare, emergency call and other services affected by the UK digital phone switchover."
      statement="This is an operational life-safety change, not simply a replacement of telephone lines or equipment."
      iconSrc="/assets/digital_switchover.png"
      iconAlt="Digital switchover service"
      supports={[
        {
          title: "Readiness assessment",
          text: "Identify affected services, analogue dependencies, data gaps, high-risk locations and the decisions needed to build a credible migration plan.",
        },
        {
          title: "Risk-based prioritisation",
          text: "Prioritise residents, schemes and services using evidence on vulnerability, equipment, connectivity, power resilience and provider timescales.",
        },
        {
          title: "Transition strategy",
          text: "Set out target outcomes, interim controls, technology routes, commercial assumptions and a practical sequence for change.",
        },
        {
          title: "Migration assurance",
          text: "Support pilots, communication, testing, exception management, handover and reporting through to operational acceptance.",
        },
      ]}
      deliverables={[
        "Analogue dependency and readiness review",
        "Estate-level risk and priority matrix",
        "Migration options and outline business case",
        "Digital telecare performance requirements",
        "Pilot, testing and rollback plan",
        "Governance, resident communication and progress reporting",
      ]}
      considerations={[
        "Which services and devices still depend on analogue signalling",
        "Provider migration dates and property-specific exceptions",
        "Alarm protocols, receiving centres and end-to-end compatibility",
        "Mobile coverage, broadband, power loss and resilience arrangements",
        "Resident identification, vulnerability data and consent",
        "Testing evidence, failed migrations, temporary controls and rollback",
      ]}
      noteTitle="Current UK position"
      note={
        <p>
          Government guidance says most customers can expect digital migration
          by the end of January 2027, but not every analogue service will move
          on the same date. Plans should be checked against each communications
          provider and the actual equipment in use.{" "}
          <a
            href="https://www.gov.uk/guidance/uk-transition-from-analogue-to-digital-landlines"
            target="_blank"
            rel="noreferrer"
          >
            Read the government guidance
          </a>
        </p>
      }
    />
  );
}
