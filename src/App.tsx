// src/App.tsx
import NavbarComponent from "./components/NavbarComponent";
import Hero from "./components/Hero";
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
      </main>
    </>
  );
}

export default App;
