import React from "react";
import Cursor from "./components/Cursor";
import Hero from "./components/Hero";
import About from "./components/About";
import Timeline from "./components/Timeline";
import timelineData from "./data/timeline";
import "./components/Timeline.css";
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
        <section id="timeline" className="min-h-screen">
          <Timeline data={timelineData} />
        </section>
        <section id="tech" className="min-h-screen">
          <TechSet />
        </section>
        <section id="projects" className="min-h-screen">
          <Projects />
        </section>
        {/* <section id="contact" className="min-h-screen">
          <Contact />
        </section> */}
      </div>
    </div>
  );
}

export default App;
