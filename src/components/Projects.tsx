// components/Projects.tsx
import { Container, Row, Col, Button } from "react-bootstrap";
import { ExternalLink, Github, Layers } from "lucide-react";

// Import the custom CSS for the Projects section
import "../style/Projects.css";

// Define a type for a single project for type safety
type Project = {
  title: string;
  image: string;
  description: string;
  technologies: string[];
  responsibilities: string[];
  liveLink: string;
  repoLink: string;
};

// Array of your projects
const projectData: Project[] = [
  {
    title: "QuantumLeap CRM",
    image: "https://placehold.co/600x400/1A1A2E/00F2FE?text=Project+Image",
    description:
      "A comprehensive Customer Relationship Management dashboard designed to streamline sales and marketing workflows with real-time data analytics.",
    technologies: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Node.js",
      "Chart.js",
      "Firebase",
    ],
    responsibilities: [
      "Architected and developed the main dashboard interface from scratch.",
      "Implemented a global state management solution using Redux Toolkit.",
      "Designed and integrated RESTful APIs for data manipulation.",
      "Ensured the application was fully responsive and accessible.",
    ],
    liveLink: "#",
    repoLink: "#",
  },
  {
    title: "Project Phoenix",
    image: "https://placehold.co/600x400/1A1A2E/A18CD1?text=Project+Image",
    description:
      "An e-commerce platform with a custom-built CMS, focusing on high performance and a seamless user experience for both customers and administrators.",
    technologies: [
      "React",
      "Next.js",
      "GraphQL",
      "PostgreSQL",
      "TailwindCSS",
      "AWS S3",
    ],
    responsibilities: [
      "Developed server-side rendering (SSR) with Next.js for SEO and performance.",
      "Built a GraphQL API to handle complex data queries efficiently.",
      "Managed product image storage and delivery using AWS S3.",
      "Collaborated with the backend team to define API schemas.",
    ],
    liveLink: "#",
    repoLink: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="section-container">
      <Container>
        <h2 className="section-title">Featured Projects</h2>
        <Row className="gy-5">
          {projectData.map((project, index) => (
            <Col key={index} lg={6}>
              <div className="project-card glass-panel">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-details">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
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
