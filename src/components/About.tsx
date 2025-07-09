// components/About.tsx
import { Container, Row, Col } from "react-bootstrap";

// Import the custom CSS for the About section
import "../style/About.css";

function About() {
  return (
    // The main container for the About section
    <section id="about" className="about-section">
      <Container>
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <div className="about-panel">
              {/* The section title with a neon glow effect */}
              <h2 className="section-title-glow">About Me</h2>

              {/* The main content paragraph */}
              <p className="about-text">
                As a Software Developer with four years of hands-on experience,
                I specialize in building dynamic and responsive web applications
                from the ground up. My passion lies in solving complex problems
                and translating ideas into clean, efficient, and scalable code.
                I thrive in collaborative environments and am always eager to
                learn new technologies to push the boundaries of what's possible
                on the web.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
