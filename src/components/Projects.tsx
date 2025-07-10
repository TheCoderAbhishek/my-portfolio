// components/Projects.tsx
import { Container, Row, Col, Button } from "react-bootstrap";
import { ExternalLink, Github, Layers } from "lucide-react";
import "../style/Projects.css";

// Define a type for a single project for type safety
type Project = {
  title: string;
  image: string;
  description: string;
  technologies: string[];
  liveLink: string;
  repoLink: string;
};

// Your project data, extracted from your resume
const projectData: Project[] = [
  {
    title: "Manufacturing Execution System (MES)",
    image: "mes.png",
    description:
      "A real-time monitoring platform for manufacturing using .NET Core APIs, React UI, SQL Server, and Azure Functions to deliver interactive dashboards and cloud-native data pipelines.",
    technologies: ["ASP.NET Core", "EF Core", "React", "Azure", "SQL Server"],
    liveLink: "#", // Replace with your actual link
    repoLink: "#", // Replace with your actual link
  },
  {
    title: "Transparent Data Encryption (TDE)",
    image: "tde.png",
    description:
      "Designed and implemented TDE across databases with a .NET Core and React UI. Managed secure key storage using Azure Key Vault, AWS KMS, and GCP KMS.",
    technologies: [
      ".NET Core",
      "React",
      "SQL Server",
      "PostgreSQL",
      "Azure Key Vault",
      "AWS KMS",
    ],
    liveLink: "#", // Replace with your actual link
    repoLink: "#", // Replace with your actual link
  },
  {
    title: "Customer Relationship Management (CRM)",
    image: "crm.png",
    description:
      "Delivered a web-based CRM for managing the customer lifecycle, sales pipeline, and dashboards with ASP.NET Web API, React, and SQL Server.",
    technologies: ["C#", "ASP.NET Web API", "MVC", "React", "Bootstrap"],
    liveLink: "#", // Replace with your actual link
    repoLink: "#", // Replace with your actual link
  },
];

function Projects() {
  return (
    <section id="projects" className="section-container">
      <Container>
        <h2 className="section-title">Featured Projects</h2>
        <Row className="gy-5">
          {projectData.map((project, index) => (
            <Col key={index} lg={6} xl={4}>
              <div className="project-card glass-panel h-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-details">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-subsection">
                    <h5 className="subsection-title">
                      <Layers size={18} className="me-2" />
                      Technologies
                    </h5>
                    <div className="tech-tags">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="project-links">
                    <Button
                      variant="primary"
                      href={project.liveLink}
                      target="_blank"
                      className="project-button"
                    >
                      <ExternalLink size={16} className="me-2" /> Live Demo
                    </Button>
                    <Button
                      variant="secondary"
                      href={project.repoLink}
                      target="_blank"
                      className="project-button-secondary"
                    >
                      <Github size={16} className="me-2" /> GitHub
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
