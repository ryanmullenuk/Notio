import type { Metadata } from "next";
import { ServicePage } from "../components/ServicePage";

export const metadata: Metadata = {
  title: "Assisted Living & Warden Call Consultancy | Notio",
  description:
    "Specialist consultancy for Assisted Living and Warden Call systems, tailored for social housing, independent living, and compliance with industry standards.",
  keywords: [
    "Assisted Living Systems",
    "Warden Call Consultancy",
    "Social Housing Support",
    "Independent Living Solutions",
    "Housing Compliance Standards",
    "Elderly Care Technology",
  ],
  alternates: { canonical: "/assisted-living" },
};

export default function AssistedLivingPage() {
  return (
    <ServicePage
      code="01 / AL"
      eyebrow="Assisted living & warden call"
      title="Safety systems that support independence."
      intro="Independent consultancy for emergency call, warden call, telecare and grouped living systems across social housing, supported living and individual homes."
      statement="A system is only effective when the technology, call pathway, resident need and operational response work together."
      iconSrc="/assets/assisted_living_dark.png"
      iconAlt="Assisted living and warden call service"
      supports={[
        {
          title: "Strategy & option appraisal",
          text: "Define the service need, understand available routes and compare system, connectivity and monitoring options without supplier bias.",
        },
        {
          title: "Estate surveys & risk",
          text: "Build an evidence-led picture of installed assets, interfaces, condition, connectivity and priority across one scheme or a wider estate.",
        },
        {
          title: "Specifications & procurement",
          text: "Turn operational and resident requirements into a clear, testable brief that supports pricing, tender evaluation and contract award.",
        },
        {
          title: "Implementation support",
          text: "Support resident communication, mobilisation, testing, handover and assurance while work takes place in occupied settings.",
        },
      ]}
      deliverables={[
        "Needs assessment and options report",
        "Asset survey, condition data and RAG priorities",
        "Outcome-led performance specification",
        "Tender review and technical evaluation",
        "Resident engagement and migration planning",
        "Testing, handover and operational readiness review",
      ]}
      considerations={[
        "Resident needs, vulnerability and preferred methods of communication",
        "Alarm receiving centre, monitoring and escalation arrangements",
        "Digital connectivity, resilience, battery backup and mobile coverage",
        "Existing wiring, devices, interfaces and third-party dependencies",
        "Access to occupied homes, sequencing and resident liaison",
        "Ownership of ongoing testing, servicing, data and maintenance",
      ]}
      noteTitle="Compliance position"
      note={
        <p>
          Compliance can only be confirmed once the final service model, design,
          equipment, installation standard, testing and certification
          requirements are agreed.
        </p>
      }
    />
  );
}
