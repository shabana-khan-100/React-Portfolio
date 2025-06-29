import React from "react";
import Cursor from "./components/Cursor";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/experience";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import "./components/Experience.css";
import TechSet from "./components/TechSet";
import Projects from "./components/Projects";
// import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Cursor />
      <div className="container mx-auto px-4">
        <section id="hero" className="h-screen">
          <Hero />
        </section>
        <section id="about" className="min-h-screen">
          <About />
        </section>
        <section id="experience" className="min-h-screen">
          <Experience />
        </section>
        <section id="education" className="min-h-screen">
          <Education />
        </section>
        <section id="certifications" className="min-h-screen">
          <Certifications />
        </section>
        <section id="tech" className="min-h-screen">
          <TechSet />
        </section>
        <section id="projects" className="min-h-screen">
          <Projects />
        </section>
      </div>
    </div>
  );
}

export default App;
