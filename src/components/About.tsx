import { Container, Row, Col, Image } from "react-bootstrap";
import { motion, type Variants } from "framer-motion";
import "../style/About.css";

/* ---------------- Animation Variants ---------------- */

const containerVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const fadeUp: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fromLeft: Variants = {
  hidden: { x: -80, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fromRight: Variants = {
  hidden: { x: 80, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

/* ---------------- Data ---------------- */

const highlights = [
  "3+ Years Experience",
  "Enterprise Applications",
  "Azure • AWS • GCP",
  "Security-First Systems",
];

const metrics = [
  "35% faster API response time",
  "10k+ real-time events/day",
  "60% faster deployments via CI/CD",
];

/* ---------------- Component ---------------- */

function About() {
  return (
    <section id="about">
      <Container>
        <motion.h2
          className="section-title"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="glass-panel"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Row className="align-items-center">
            {/* ---------------- Text Content ---------------- */}
            <Col lg={8}>
              <motion.div variants={fromLeft}>
                <p className="about-text">
                  I am a <strong>.NET Full-Stack Developer</strong> with over
                  three years of experience building secure, scalable
                  enterprise applications using <strong>C#, ASP.NET Core,
                    and React</strong>. I’ve worked extensively with
                  cloud-native architectures across Azure, AWS, and GCP.
                </p>

                <p className="about-text">
                  I thrive in Agile environments, focusing on clean
                  architecture, performance optimization, and secure system
                  design. From real-time dashboards to enterprise HRMS and
                  banking systems, I enjoy solving complex problems that
                  scale.
                </p>
              </motion.div>

              {/* ---------------- Highlights ---------------- */}
              <motion.div className="about-highlights" variants={fadeUp}>
                {highlights.map(item => (
                  <span key={item} className="highlight-pill">
                    {item}
                  </span>
                ))}
              </motion.div>

              {/* ---------------- Metrics ---------------- */}
              <motion.ul className="about-metrics" variants={fadeUp}>
                {metrics.map(metric => (
                  <li key={metric}>{metric}</li>
                ))}
              </motion.ul>
            </Col>

            {/* ---------------- Profile Image ---------------- */}
            <Col lg={4} className="text-center mt-4 mt-lg-0">
              <motion.div variants={fromRight}>
                <Image
                  src="about.jpg"
                  alt="Abhishek Patil"
                  roundedCircle
                  fluid
                  className="about-profile-image"
                />
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
}

export default About;
