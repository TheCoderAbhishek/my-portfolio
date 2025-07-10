// components/Navbar.tsx
import { Navbar, Nav, Container } from "react-bootstrap";
import { Code } from "lucide-react";

// Import the custom CSS for our futuristic navbar
import "../style/NavbarComponent.css";

export function NavbarComponent() {
  return (
    // The 'sticky-top' class makes it stick only when you scroll past it.
    // The 'navbar-modern' class applies our new custom styles.
    <Navbar expand="lg" variant="dark" className="navbar-modern sticky-top">
      <Container>
        <Navbar.Brand
          href="#home"
          className="fw-bold d-flex align-items-center"
        >
          <Code className="me-2" />
          Your Name
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
