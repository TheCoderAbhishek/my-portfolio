// components/Experience.tsx
import { Container } from "react-bootstrap";
import { Briefcase, Calendar, ChevronsRight } from "lucide-react";

// Import the custom CSS for the Experience section
import "../style/Experience.css";

// Define a type for a single experience item for type safety
type ExperienceItem = {
  role: string;
  employer: string;
  duration: string;
  projects: string[];
  responsibilities: string[];
};

// Array of your 4 work experiences
const experienceData: ExperienceItem[] = [
  {
    role: "Senior Frontend Developer",
    employer: "Innovatech Solutions, Pune",
    duration: "Jan 2023 - Present",
    projects: ["Project Phoenix", "QuantumLeap CRM"],
    responsibilities: [
      "Led the development of a new component library in React and TypeScript, improving code reusability by 40%.",
      "Mentored junior developers, conducting code reviews and promoting best practices in frontend development.",
      "Optimized application performance, reducing load times by 25% through code splitting and lazy loading.",
    ],
  },
  {
    role: "Software Developer",
    employer: "Cyberdyne Systems, Mumbai",
    duration: "Jul 2021 - Dec 2022",
    projects: ["Skynet Dashboard", "T-800 UI"],
    responsibilities: [
      "Developed and maintained user-facing features using React.js and Redux for state management.",
      "Collaborated with UI/UX designers to translate wireframes into high-quality, responsive code.",
      "Wrote and maintained unit and integration tests using Jest and React Testing Library.",
    ],
  },
  {
    role: "Junior Web Developer",
    employer: "NextGen Web Services, Pune",
    duration: "Aug 2020 - Jun 2021",
    projects: ["E-commerce Platform V2", "Client Portal"],
    responsibilities: [
      "Assisted in the development of a large-scale e-commerce platform using modern JavaScript frameworks.",
      "Built reusable components and front-end libraries for future use.",
      "Fixed bugs and improved application performance, contributing to a 15% increase in user satisfaction.",
    ],
  },
  {
    role: "Software Engineer Intern",
    employer: "Tech Genesis, Nashik",
    duration: "Jan 2020 - Jul 2020",
    projects: ["Internal Analytics Tool"],
    responsibilities: [
      "Gained practical experience with the full software development lifecycle.",
      "Contributed to the development of an internal tool by writing and testing code.",
      "Participated in daily stand-ups and sprint planning meetings.",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <Container>
        <h2 className="section-title-glow text-center">Career Journey</h2>
        <div className="timeline">
          {experienceData.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-content">
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
