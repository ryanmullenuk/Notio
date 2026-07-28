import type { Metadata } from "next";
import { ServicePage } from "../components/ServicePage";

export const metadata: Metadata = {
  title: "Smoke Detection & Fire Safety Systems | BS 5839 Consultancy by Notio",
  description:
    "Consultancy for smoke detection systems compliant with BS 5839 and BS 5869. Specialising in communal and domestic fire safety for multi-occupancy and independent living schemes.",
  keywords: [
    "Smoke Detection Systems",
    "Fire Safety Consultancy",
    "BS 5839 Compliance",
    "LD1 Fire Detection",
    "Grouped Living Fire Safety",
    "Housing Provider Fire Solutions",
  ],
  alternates: { canonical: "/smoke-detection-systems" },
};

export default function SmokeDetectionPage() {
  return (
    <ServicePage
      code="03 / FS"
      eyebrow="Fire & smoke detection"
      title="Detection strategies grounded in the building and its residents."
      intro="Independent support for domestic and communal fire detection across housing, supported living, sheltered schemes and other multi-occupancy residential settings."
      statement="The right detection approach depends on the fire strategy, premises, resident risk, management arrangements and intended response."
      iconSrc="/assets/fire_safety_dark.png"
      iconAlt="Fire and smoke detection service"
      supports={[
        {
          title: "Information & gap review",
          text: "Review fire strategies, risk assessments, asset records, alarm cause-and-effect, maintenance history and available evidence.",
        },
        {
          title: "Surveys & risk priorities",
          text: "Assess installed detection, coverage, condition, interfaces, access issues and information gaps across communal and domestic areas.",
        },
        {
          title: "Requirements & procurement",
          text: "Translate the agreed fire safety intent into a clear, coordinated brief for competent design, pricing, installation and certification.",
        },
        {
          title: "Delivery & handover support",
          text: "Support queries, change control, resident communication, witness testing, records, certification, training and close-out.",
        },
      ]}
      deliverables={[
        "Existing-information and compliance gap review",
        "Detection asset survey and RAG report",
        "Employer’s requirements or performance specification",
        "Tender clarification and technical comparison",
        "Installation assurance and change review",
        "Handover, certification and O&M record review",
      ]}
      considerations={[
        "Fire strategy, evacuation approach and competent fire risk advice",
        "Domestic and communal detection objectives and system boundaries",
        "Resident vulnerability, hearing needs and alarm response",
        "Interfaces with doors, lifts, smoke control, warden call and monitoring",
        "Access, asbestos, containment, power, making good and occupied working",
        "Design responsibility, certification, maintenance and false-alarm management",
      ]}
      noteTitle="Competence and compliance"
      note={
        <p>
          Notio can help define and review the requirement. Final compliance
          depends on the agreed fire strategy, competent design, surveys,
          installation, commissioning and certification. Where needed, the
          position should be confirmed with the fire risk assessor, client
          dutyholder, competent designer and relevant authorities.
        </p>
      }
    />
  );
}
