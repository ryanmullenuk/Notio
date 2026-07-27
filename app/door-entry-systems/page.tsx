import type { Metadata } from "next";
import { ServicePage } from "../components/ServicePage";

export const metadata: Metadata = {
  title: "Door Entry & Access Control Solutions | Notio Consulting",
  description:
    "Secure and efficient door entry and access control solutions, including video, audio, and cloud-based systems, for housing associations and independent living schemes.",
  keywords: [
    "Door Entry Systems Consultancy",
    "Access Control Solutions",
    "Video & Audio Door Entry",
    "Housing Security Systems",
    "Social Housing Door Entry",
    "Cloud-Based Access Control",
  ],
  alternates: { canonical: "/door-entry-systems" },
};

export default function DoorEntryPage() {
  return (
    <ServicePage
      code="02 / DE"
      eyebrow="Door entry & access control"
      title="Secure access without creating new barriers."
      intro="Consultancy for audio, video and connected door entry, access control and communal security systems across housing and independent living schemes."
      statement="Good access control balances security, accessibility, fire strategy, resident experience and day-to-day management."
      supports={[
        {
          title: "Requirements definition",
          text: "Establish who needs access, how permissions are managed, what residents experience and how the system must perform in normal and emergency conditions.",
        },
        {
          title: "Survey & system review",
          text: "Review entrances, risers, cabling, dwellings, power, locking, fire interfaces, connectivity and the condition of existing assets.",
        },
        {
          title: "Design brief & procurement",
          text: "Prepare a coordinated specification for audio, video, mobile, cloud or hybrid solutions, with responsibilities and interfaces made clear.",
        },
        {
          title: "Delivery assurance",
          text: "Support sample approvals, resident access, technical queries, testing, commissioning, training, records and handover.",
        },
      ]}
      deliverables={[
        "Access and user-needs assessment",
        "Door, dwelling and infrastructure survey",
        "System options and lifecycle considerations",
        "Coordinated technical specification",
        "Tender evaluation and clarification support",
        "Witness testing and handover review",
      ]}
      considerations={[
        "Accessible use for residents with hearing, sight, dexterity or mobility needs",
        "Fire strategy, fail-safe or fail-secure operation and emergency release",
        "Door condition, locking hardware, power and physical security",
        "Data protection for video, cloud services, audit trails and user records",
        "Permission management, lost credentials and out-of-hours support",
        "Integration boundaries with CCTV, lifts, gates, alarms and other systems",
      ]}
      noteTitle="Responsibility boundary"
      note={
        <p>
          The final design should identify responsibility for doors, locks,
          containment, power, network services, fire interfaces, making good
          and ongoing administration. These items can materially affect price
          and programme.
        </p>
      }
    />
  );
}
