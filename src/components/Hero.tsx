// src/components/Hero.tsx (Corrected with explicit types)

import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { Github, Linkedin, Download } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import { motion, type Variants } from "framer-motion"; // 1. Import the 'Variants' type
import "../style/Hero.css";

// --- Animation Variants ---
// 2. Add the ': Variants' type annotation to each object
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const imageVariants: Variants = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
// -------------------------

// Accept the onViewportEnter prop for nav highlighting
interface HeroProps {
  onViewportEnter: () => void;
}

function Hero({ onViewportEnter }: HeroProps) {
  return (
    // The root element uses onViewportEnter for the nav state
    <motion.section
      id="home"
      className="hero-section section-container"
      onViewportEnter={onViewportEnter}
    >
      <Container>
        <Row className="align-items-center text-center text-lg-start">
          <Col lg={4} className="mb-4 mb-lg-0">
            {/* Animate the Profile Image */}
            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate="visible"
            >
              <Image
                src="profile_photo.jpg"
                alt="Profile Photo"
                roundedCircle
                fluid
                className="profile-image"
              />
            </motion.div>
          </Col>

          {/* This container orchestrates the staggering for the right column */}
          <Col lg={8}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Each child inside gets the 'itemVariants' */}
              <motion.h1 variants={itemVariants} className="hero-title">
                Abhishek Patil
              </motion.h1>

              <motion.p variants={itemVariants} className="hero-subtitle">
                Software Developer (.NET) | Full Stack Engineer
              </motion.p>

              <motion.p variants={itemVariants} className="hero-description">
                A dedicated Full Stack Engineer with 4 years of experience,
                specializing in crafting scalable .NET applications and
                intuitive React interfaces.
              </motion.p>

              <motion.div variants={itemVariants} className="mt-4">
                <Button
                  variant="primary"
                  size="lg"
                  href="resume.pdf"
                  className="hero-button"
                >
                  <Download className="me-2" /> Download Resume
                </Button>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="social-links-group mt-4"
              >
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
                <a
                  href="https://leetcode.com/u/InnovationWithAbhi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="LeetCode Profile"
                >
                  <SiLeetcode size={32} />
                </a>
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </motion.section>
  );
}

export default Hero;
