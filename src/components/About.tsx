// components/About.tsx
import { Container, Row, Col } from "react-bootstrap";

// Import the custom CSS for the About section
import "../style/About.css";

function About() {
  return (
    <section id="about" className="section-container">
      <Container>
        <h2 className="section-title">About Me</h2>
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <div className="glass-panel text-center">
              <p className="lead" style={{ lineHeight: 1.8 }}>
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
