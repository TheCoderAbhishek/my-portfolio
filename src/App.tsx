// src/App.tsx
import NavbarComponent from "./components/NavbarComponent";
import Hero from "./components/Hero";
import About from "./components/About";
import { Experience } from "./components/Experience";
import { Container } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <>
      {/* The Navbar is fixed at the top */}
      <NavbarComponent />

      {/* The main content area of the portfolio */}
      <main>
        {/* The Hero section is the first thing users see */}
        <Hero />

        {/* A container for the rest of the sections to provide padding and alignment */}
        <Container className="py-5">
          <About />
          <Experience />
          {/* <Skills />
          <Projects />
          <Contact /> */}
        </Container>
      </main>
    </>
  );
}

export default App;
