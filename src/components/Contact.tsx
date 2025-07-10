// components/Contact.tsx
import { Container, Row, Col } from "react-bootstrap";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import "../style/Contact.css";

function Contact() {
  return (
    <section id="contact" className="section-container">
      <Container>
        <h2 className="section-title">Get In Touch</h2>
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <div className="glass-panel text-center">
              <p className="contact-intro">
                I'm currently seeking new opportunities and welcome any chance
                to connect. Whether you have a question, a project proposal, or
                just want to say hello, my inbox is always open.
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <Mail size={20} className="contact-icon" />
                  <a
                    href="mailto:patil.abhishek.66333@gmail.com"
                    className="contact-link-modern"
                  >
                    patil.abhishek.66333@gmail.com
                  </a>
                </div>
                <div className="contact-item">
                  <MapPin size={20} className="contact-icon" />
                  <span>Pune, MH, India</span>
                </div>
              </div>

              <div className="contact-social-links">
                <a
                  href="https://github.com/TheCoderAbhishek"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="GitHub Profile"
                >
                  <Github size={28} />
                </a>
                <a
                  href="https://linkedin.com/in/yuvraj96k"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={28} />
                </a>
                <a
                  href="https://leetcode.com/your-username/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="LeetCode Profile"
                >
                  <SiLeetcode size={28} />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
