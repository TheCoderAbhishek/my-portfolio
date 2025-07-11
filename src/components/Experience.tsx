import { Container } from "react-bootstrap";
import { Briefcase, Calendar, ChevronsRight } from "lucide-react";
import "../style/Experience.css";

// Define a type for a single experience item for type safety
type ExperienceItem = {
  role: string;
  employer: string;
  duration: string;
  projects: string[];
  responsibilities: string[];
};

// Your work experience, extracted directly from your resume
const experienceData: ExperienceItem[] = [
  {
    role: "Software Engineer OT_Ops",
    employer: "Advanced Technologies & Solutions (AT&S)",
    duration: "Feb 2025 - Present",
    projects: ["MES & AES Systems"],
    responsibilities: [
      "Developed robust .NET Core APIs and dynamic React dashboards using Bootstrap and WCAG standards.",
      "Integrated real-time OT data streams with Azure App Services, Azure Functions, and AWS cloud protocols.",
      "Achieved 99.9% system uptime by implementing SQL Server-based alerting and monitoring systems.",
      "Ensured security for sensitive data using Azure Key Vault and AWS KMS.",
    ],
  },
  {
    role: "Software Developer (.NET)",
    employer: "Jisa Softech Pvt Ltd",
    duration: "Sep 2023 - Jan 2025",
    projects: ["Cloud Security & Data Encryption"],
    responsibilities: [
      "Delivered secure full-stack solutions for encryption key lifecycle management using .NET Core and React.",
      "Applied EF Core, LINQ, and SQL encryption techniques to enforce data compliance and security.",
      "Mentored junior developers, contributed to sprint planning, and collaborated on system architecture.",
      "Integrated systems across Azure, AWS, and GCP using secure APIs and key management services.",
    ],
  },
  {
    role: "Software Engineer",
    employer: "Persistent Systems",
    duration: "Jul 2022 - Aug 2023",
    projects: ["Banking CRM & Healthcare Security"],
    responsibilities: [
      "Built scalable React modules and REST APIs using ASP.NET MVC and Web API.",
      "Led deployment pipelines using Azure DevOps, configured IIS, and deployed secure applications.",
      "Contributed to critical BFSI and healthcare projects requiring secure handling of sensitive data.",
    ],
  },
  {
    role: "Intern",
    employer: "Persistent Systems",
    duration: "Feb 2022 - Jul 2022",
    projects: ["Data Analysis, User Management & 2FA"],
    responsibilities: [
      "Participated in full-stack development using ASP.NET Core, React, and SQL Server.",
      "Implemented 2FA login systems, access control, and analytics queries for security.",
      "Assisted in bug tracking and performance queries to maintain application stability.",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="section-container">
      <Container>
        <h2 className="section-title">Career Journey</h2>
        <div className="timeline-modern">
          {experienceData.map((item, index) => (
            <div key={index} className="timeline-item-modern">
              <div className="timeline-content-modern glass-panel">
                <h3 className="role-title">
                  <Briefcase size={20} className="me-2" />
                  {item.role}
                </h3>
                <h4 className="employer-name">{item.employer}</h4>
                <p className="duration">
                  <Calendar size={16} className="me-2" />
                  {item.duration}
                </p>

                <div className="projects-list">
                  <strong>Projects:</strong> {item.projects.join(", ")}
                </div>

                <ul className="responsibilities-list">
                  {item.responsibilities.map((point, i) => (
                    <li key={i}>
                      <ChevronsRight size={16} className="bullet-icon" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Experience;
