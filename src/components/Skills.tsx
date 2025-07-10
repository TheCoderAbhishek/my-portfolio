import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import {
  LayoutPanelLeft,
  FileCode2,
  FileJson2,
  Palette,
  Server,
  Database,
  Cloud,
  GitBranchPlus,
  Wrench,
  Users,
  BrainCircuit,
  Code,
  Bot,
  ShieldCheck,
  TestTube2,
  Puzzle,
} from "lucide-react";
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

// Your skills, extracted and categorized from your resume
const skillData: SkillCategory[] = [
  {
    title: "Languages & Frameworks",
    skills: [
      { name: "C#", icon: <FileCode2 size={32} /> },
      { name: ".NET 6/7", icon: <Server size={32} /> },
      { name: "ASP.NET Core", icon: <Server size={32} /> },
      { name: "Web API", icon: <Server size={32} /> },
      { name: "ASP.NET MVC", icon: <Server size={32} /> },
      { name: "EF Core", icon: <Database size={32} /> },
      { name: "LINQ", icon: <Puzzle size={32} /> },
    ],
  },
  {
    title: "Front-End",
    skills: [
      { name: "React", icon: <LayoutPanelLeft size={32} /> },
      { name: "JavaScript (ES6+)", icon: <FileJson2 size={32} /> },
      { name: "TypeScript", icon: <FileCode2 size={32} /> },
      { name: "HTML5", icon: <Code size={32} /> },
      { name: "CSS3", icon: <Palette size={32} /> },
      { name: "Bootstrap", icon: <Bot size={32} /> },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "SQL Server", icon: <Database size={32} /> },
      { name: "PostgreSQL", icon: <Database size={32} /> },
      { name: "Azure SQL", icon: <Database size={32} /> },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "Microsoft Azure", icon: <Cloud size={32} /> },
      { name: "AWS", icon: <Cloud size={32} /> },
      { name: "GCP", icon: <Cloud size={32} /> },
      { name: "CI/CD Pipelines", icon: <GitBranchPlus size={32} /> },
    ],
  },
  {
    title: "Development Practices",
    skills: [
      { name: "Agile Methodologies", icon: <Users size={32} /> },
      { name: "Secure Coding", icon: <ShieldCheck size={32} /> },
      { name: "Unit Testing", icon: <TestTube2 size={32} /> },
      { name: "Debugging", icon: <Wrench size={32} /> },
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Problem-Solving", icon: <BrainCircuit size={32} /> },
      { name: "Communication", icon: <Users size={32} /> },
      { name: "Team Leadership", icon: <Users size={32} /> },
      { name: "Adaptability", icon: <Puzzle size={32} /> },
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
