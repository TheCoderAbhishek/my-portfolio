// components/Contact.tsx
import { Container, Row, Col, Button } from "react-bootstrap";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";

// Import the custom CSS for the Contact section
import "../style/Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <Container>
        <h2 className="section-title-glow text-center">Get In Touch</h2>
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <div className="contact-panel">
              <p className="contact-intro">
                I'm currently seeking new opportunities and would love to hear
                from you. Whether you have a question or just want to say hi,
                feel free to reach out.
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <Mail size={24} className="contact-icon" />
                  <a
                    href="mailto:your.email@example.com"
                    className="contact-link"
                  >
                    your.email@example.com
                  </a>
                </div>
                <div className="contact-item">
                  <MapPin size={24} className="contact-icon" />
                  <span>Pimpri-Chinchwad, Maharashtra, India</span>
                </div>
              </div>

              <div className="contact-social-links">
                <a
                  href="https://github.com/your-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <Github size={32} />
                </a>
                <a
                  href="https://linkedin.com/in/your-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <Linkedin size={32} />
                </a>
              </div>

              <div className="text-center mt-4">
                <Button
                  variant="outline-light"
                  href="mailto:your.email@example.com"
                  className="btn-neon"
                >
                  <Mail size={16} className="me-2" />
                  <span>Say Hello</span>
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
