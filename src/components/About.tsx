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
                As a .NET Full-Stack Developer with over three years of
                experience, I specialize in building secure, scalable enterprise
                applications using C#, ASP.NET Core, and React. My expertise
                extends across major cloud platforms, including Azure, AWS, and
                GCP, where I've integrated real-time data streams and engineered
                secure data encryption solutions. I am passionate about writing
                clean, quality code and thrive in Agile environments, utilizing
                Azure DevOps and CI/CD pipelines to deliver robust software.
                From developing real-time manufacturing dashboards to building
                secure banking CRMs, I enjoy tackling complex challenges and
                collaborating with teams to create high-impact applications.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
