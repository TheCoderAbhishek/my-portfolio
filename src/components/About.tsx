// components/About.tsx
import { Container, Row, Col, Image } from "react-bootstrap";

// Import the custom CSS for the About section
import "../style/About.css";

function About() {
  return (
    <section id="about" className="section-container">
      <Container>
        <h2 className="section-title">About Me</h2>
        <div className="glass-panel">
          <Row className="align-items-center">
            {/* Text Column */}
            <Col lg={8} className="text-center text-lg-start">
              <p className="about-text">
                As a .NET Full-Stack Developer with over three years of
                experience, I specialize in building secure, scalable enterprise
                applications using C#, ASP.NET Core, and React. My expertise
                extends across major cloud platforms, including Azure, AWS, and
                GCP, where I've integrated real-time data streams and engineered
                secure data encryption solutions.
              </p>
              <p className="about-text">
                I am passionate about writing clean, quality code and thrive in
                Agile environments, utilizing Azure DevOps and CI/CD pipelines
                to deliver robust software. From developing real-time
                manufacturing dashboards to building secure banking CRMs, I
                enjoy tackling complex challenges and collaborating with teams
                to create high-impact applications.
              </p>
            </Col>

            {/* Image Column */}
            <Col lg={4} className="d-flex justify-content-center mt-4 mt-lg-0">
              <Image
                src="about.jpg" // Using the same image as the Hero section
                alt="Abhishek Patil"
                roundedCircle
                fluid
                className="about-profile-image"
              />
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default About;
