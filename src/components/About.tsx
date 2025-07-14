// src/components/About.tsx (Updated with animations)

import { Container, Row, Image } from "react-bootstrap";
import { motion, type Variants } from "framer-motion"; // Import motion and Variants
import "../style/About.css";

// --- Animation Variants ---
// Variant for the content sliding in from the left
const fromLeftVariant: Variants = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// Variant for the content sliding in from the right
const fromRightVariant: Variants = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};
// -------------------------

function About() {
  return (
    // The parent section tag is now inside AnimatedSection, so we just need the ID here
    <section id="about">
      <Container>
        <h2 className="section-title">About Me</h2>
        <div className="glass-panel">
          <Row className="align-items-center">
            {/* 1. Animate the Text Column from the left */}
            <motion.div
              className="col-lg-8 text-center text-lg-start"
              variants={fromLeftVariant}
              initial="hidden"
              // Animate when the element is in view
              whileInView="visible"
              // Trigger animation only once
              viewport={{ once: true, amount: 0.2 }}
            >
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
            </motion.div>

            {/* 2. Animate the Image Column from the right */}
            <motion.div
              className="col-lg-4 d-flex justify-content-center mt-4 mt-lg-0"
              variants={fromRightVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Image
                src="about.jpg"
                alt="Abhishek Patil"
                roundedCircle
                fluid
                className="about-profile-image"
              />
            </motion.div>
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default About;
