import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
} from "react-icons/fa";

const skills = [
  { icon: <FaReact />, name: "React" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <FaHtml5 />, name: "HTML5" },
  { icon: <FaCss3Alt />, name: "CSS3" },
  { icon: <FaJsSquare />, name: "JavaScript" },
  { icon: <FaGitAlt />, name: "Git" },
];

const TechSet = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-6xl md:text-8xl font-bold mb-12">TECH SET</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 rounded-lg shadow-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300"
            style={{
              boxShadow: "0 0 15px rgba(0, 194, 255, 0.5)",
              border: "1px solid rgba(0, 194, 255, 0.5)",
            }}
          >
            <div className="text-6xl text-cyan-400 mb-4">{skill.icon}</div>
            <h3 className="text-xl font-bold">{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechSet;
