// components/Hero.tsx
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { Github, Linkedin, Download } from "lucide-react";
import "../style/Hero.css";

function Hero() {
  return (
    // The main hero container with a custom ID for styling
    <section id="home" className="hero-section">
      <Container className="text-center text-white">
        <Row className="align-items-center py-5">
          <Col lg={4} className="mb-4 mb-lg-0">
            {/* The image now has a glowing border class */}
            <Image
              src="https://placehold.co/300x300/1A1A2E/E0E0E0?text=Your+Photo"
              alt="Your Name"
              className="glowing-image"
            />
          </Col>
          <Col lg={8}>
            {/* The main title with a neon glow effect */}
            <h1 className="hero-title">YOUR NAME</h1>

            {/* The subtitle with a secondary neon glow */}
            <p className="hero-subtitle">
              Software Developer | Full Stack Engineer
            </p>

            {/* Action buttons with custom neon styling */}
            <div className="mt-4">
              <Button
                variant="outline-light"
                size="lg"
                href="/resume.pdf"
                className="btn-neon me-3"
              >
                <Download className="me-2" />
                <span>Download Resume</span>
              </Button>
            </div>

            {/* Social media icons with glowing hover effects */}
            <div className="social-icons mt-4">
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
          </Col>
        </Row>
      </Container>
      {/* An empty div for the animated background gradient overlay */}
      <div className="hero-background-overlay"></div>
    </section>
  );
}

export default Hero;
