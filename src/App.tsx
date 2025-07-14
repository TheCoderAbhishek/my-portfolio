// src/App.tsx (Corrected)

import { useState } from "react";
import NavbarComponent from "./components/NavbarComponent";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
import AnimatedSection from "./components/AnimatedSection";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="app-container">
      <NavbarComponent activeSection={activeSection} />
      <main>
        <Hero onViewportEnter={() => setActiveSection("home")} />

        {/* Pass the prop to the AnimatedSection wrapper, NOT the component inside */}
        <AnimatedSection onViewportEnter={() => setActiveSection("about")}>
          <About />
        </AnimatedSection>

        <AnimatedSection onViewportEnter={() => setActiveSection("experience")}>
          <Experience />
        </AnimatedSection>

        <AnimatedSection onViewportEnter={() => setActiveSection("skills")}>
          <Skills />
        </AnimatedSection>

        <AnimatedSection onViewportEnter={() => setActiveSection("projects")}>
          <Projects />
        </AnimatedSection>

        <AnimatedSection onViewportEnter={() => setActiveSection("contact")}>
          <Contact />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}

export default App;
