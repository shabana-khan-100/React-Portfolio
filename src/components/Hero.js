import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <h2 className="text-2xl md:text-4xl mb-2">Hi, I am</h2>
      <h1 className="text-6xl md:text-8xl font-bold text-cyan-400 mb-4">
        Shabana Khan
      </h1>
      <h3 className="text-2xl md:text-4xl">Full Stack Developer</h3>
      <div className="flex space-x-6 mt-8">
        <a
          href="https://github.com/shabana-khan-100"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl hover:text-cyan-400 transition-colors duration-300"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/shabana-khan-671828200/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl hover:text-cyan-400 transition-colors duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:shabanakhan.190524@gmail.com"
          className="text-4xl hover:text-cyan-400 transition-colors duration-300"
        >
          <FaEnvelope />
        </a>
      </div>
    </div>
  );
};

export default Hero;
