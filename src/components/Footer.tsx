// components/Footer.tsx
import { Container } from "react-bootstrap";

// Import the custom CSS for the Footer
import "../style/Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <Container className="text-center">
        <p className="mb-0">
          &copy; {currentYear} Your Name. All Rights Reserved.
        </p>
        <p className="footer-subtitle">
          Designed & Built with <span className="heart-icon">&hearts;</span>
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
