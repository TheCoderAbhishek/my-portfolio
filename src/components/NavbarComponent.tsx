// src/components/NavbarComponent.tsx (Corrected)

import { Navbar, Nav, Container } from "react-bootstrap";
import { Code } from "lucide-react";
import "../style/NavbarComponent.css";

// 1. Define the props that this component will accept
interface NavbarProps {
  activeSection: string;
}

// 2. Use the props in the component function
export function NavbarComponent({ activeSection }: NavbarProps) {
  return (
    <Navbar expand="lg" variant="dark" className="navbar-modern sticky-top">
      <Container>
        <Navbar.Brand
          href="#home"
          className="fw-bold d-flex align-items-center"
        >
          <Code className="me-2" />
          Abhishek Patil
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* 3. Apply the 'active' class based on the prop */}
            <Nav.Link
              href="#about"
              className={activeSection === "about" ? "active" : ""}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#experience"
              className={activeSection === "experience" ? "active" : ""}
            >
              Experience
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={activeSection === "skills" ? "active" : ""}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={activeSection === "projects" ? "active" : ""}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className={activeSection === "contact" ? "active" : ""}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
