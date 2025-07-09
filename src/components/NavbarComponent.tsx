// components/Navbar.tsx
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Code } from 'lucide-react';

// Import the custom CSS for our futuristic navbar
import '../style/NavbarComponent.css';

function NavbarComponent() {
  return (
    <Navbar
      expand="lg"
      variant="dark"
      fixed="top"
      // Add our custom class to apply the neon styles
      className="navbar-futuristic"
    >
      <Container>
        <Navbar.Brand href="#home" className="navbar-brand-glow">
          <Code className="me-2" />
          Your Name
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#about" className="nav-link-glow">About</Nav.Link>
            <Nav.Link href="#experience" className="nav-link-glow">Experience</Nav.Link>
            <Nav.Link href="#skills" className="nav-link-glow">Skills</Nav.Link>
            <Nav.Link href="#projects" className="nav-link-glow">Projects</Nav.Link>
            <Nav.Link href="#contact" className="nav-link-glow">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;