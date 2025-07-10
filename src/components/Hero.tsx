// components/Hero.tsx
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { Github, Linkedin, Download } from "lucide-react";
import "../style/Hero.css";

function Hero() {
  return (
    <section id="home" className="hero-section section-container">
      <Container>
        <Row className="align-items-center text-center text-lg-start">
          <Col lg={4} className="mb-4 mb-lg-0">
            <Image
              src="profile_photo.jpg"
              alt="Profile Photo"
              roundedCircle
              fluid
              className="profile-image"
            />
          </Col>
          <Col lg={8}>
            <h1 className="hero-title">Abhishek Patil</h1>
            <p className="hero-subtitle">
              Software Developer (.NET) | Full Stack Engineer
            </p>
            <p className="hero-description">
              A dedicated Full Stack Engineer with 4 years of experience,
              specializing in crafting scalable .NET applications and intuitive
              React interfaces.
            </p>
            <div className="mt-4">
              <Button
                variant="primary"
                size="lg"
                href="resume.pdf"
                className="hero-button me-3"
              >
                <Download className="me-2" /> Download Resume
              </Button>
              <a
                href="https://github.com/TheCoderAbhishek"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Github size={32} />
              </a>
              <a
                href="https://linkedin.com/in/yuvraj96k"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Linkedin size={32} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
