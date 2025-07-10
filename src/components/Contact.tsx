// components/Contact.tsx
import { Container, Row, Col, Button } from "react-bootstrap";
import { Mail } from "lucide-react";

// Import the custom CSS for the Contact section
import "../style/Contact.css";

function Contact() {
  return (
    <section id="contact" className="section-container">
      <Container>
        <h2 className="section-title">Get In Touch</h2>
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <div className="glass-panel text-center">
              <p className="lead mb-4">
                I'm currently open to new opportunities. My inbox is always
                open, whether you have a question or just want to say hi, I'll
                get back to you!
              </p>
              <div className="d-flex justify-content-center align-items-center mb-4">
                <Mail size={20} className="me-2" style={{ color: "#7A5AF8" }} />
                <a
                  href="mailto:your.email@example.com"
                  className="contact-link-modern"
                >
                  your.email@example.com
                </a>
              </div>
              <Button
                variant="primary"
                size="lg"
                href="mailto:your.email@example.com"
                className="hero-button"
              >
                Say Hello
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
