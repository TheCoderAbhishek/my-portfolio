// components/Skills.tsx
import { Container, Row, Col } from "react-bootstrap";
import {
  LayoutPanelLeft,
  FileCode2,
  FileJson2,
  Palette,
  Server,
  Database,
  Cloud,
  Container as DockerContainer,
  GitBranchPlus,
  Wrench,
  Users,
  BrainCircuit,
  Code,
  Bot,
} from "lucide-react";

// Import the custom CSS for the Skills section
import "../style/Skills.css";

// Define a type for a single skill, now including an icon
type Skill = {
  name: string;
  icon: React.JSX.Element;
};

// Define a type for a skill category
type SkillCategory = {
  title: string;
  skills: Skill[];
};

// Your skills, organized into categories with corresponding icons
const skillData: SkillCategory[] = [
  {
    title: "Front End",
    skills: [
      { name: "React", icon: <LayoutPanelLeft size={32} /> },
      { name: "TypeScript", icon: <FileCode2 size={32} /> },
      { name: "JavaScript", icon: <FileJson2 size={32} /> },
      { name: "HTML5", icon: <Code size={32} /> },
      { name: "CSS3 / SCSS", icon: <Palette size={32} /> },
      { name: "Bootstrap 5", icon: <Bot size={32} /> },
    ],
  },
  {
    title: "Back End",
    skills: [
      { name: "Node.js", icon: <Server size={32} /> },
      { name: "Express.js", icon: <Server size={32} /> },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: <Database size={32} /> },
      { name: "PostgreSQL", icon: <Database size={32} /> },
      { name: "Firebase", icon: <Database size={32} /> },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS", icon: <Cloud size={32} /> },
      { name: "Docker", icon: <DockerContainer size={32} /> },
      { name: "Git & GitHub", icon: <GitBranchPlus size={32} /> },
    ],
  },
  {
    title: "Tools & Soft Skills",
    skills: [
      { name: "VS Code", icon: <Wrench size={32} /> },
      { name: "Problem Solving", icon: <BrainCircuit size={32} /> },
      { name: "Collaboration", icon: <Users size={32} /> },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="section-container">
      <Container>
        <h2 className="section-title">Technical Arsenal</h2>
        <div className="glass-panel">
          <Row className="gy-4">
            {skillData.map((category, index) => (
              <Col key={index} md={6} lg={4}>
                <div className="skill-category">
                  <h3 className="category-title">{category.title}</h3>
                  <div className="skills-grid">
                    {category.skills.map((skill, i) => (
                      <div key={i} className="skill-item">
                        {skill.icon}
                        <span className="skill-name">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default Skills;
