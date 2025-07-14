// src/App.tsx
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
  return (
    <div className="app-container">
      <NavbarComponent />
      <main>
        {/* Hero can be animated differently or not at all */}
        <Hero />

        <AnimatedSection>
          <About />
        </AnimatedSection>
        <AnimatedSection>
          <Experience />
        </AnimatedSection>
        <AnimatedSection>
          <Skills />
        </AnimatedSection>
        <AnimatedSection>
          <Projects />
        </AnimatedSection>
        <AnimatedSection>
          <Contact />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}

export default App;
