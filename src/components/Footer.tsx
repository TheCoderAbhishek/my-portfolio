// components/Footer.tsx
import { Container } from "react-bootstrap";

// Import the custom CSS for the Footer
import "../style/Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer-modern">
      <Container className="text-center">
        <p className="mb-0">
          &copy; {currentYear} Your Name. Designed & Built with &hearts;
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
