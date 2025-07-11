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

function App() {
  return (
    <div className="app-container">
      {/* The Navbar now scrolls with the page */}
      <NavbarComponent />

      {/* The main content area */}
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* The Footer at the bottom */}
      <Footer />
    </div>
  );
}

export default App;
