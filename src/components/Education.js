import React, { useEffect, useState } from "react";
import educationData from "../data/education.json";

const Education = () => {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    setEducation(educationData);
  }, []);

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl md:text-8xl font-bold text-center mb-12">
          EDUCATION
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105"
              style={{
                boxShadow: "0 0 15px rgba(0, 194, 255, 0.5)",
                border: "1px solid rgba(0, 194, 255, 0.5)",
              }}
            >
              <h3 className="text-2xl font-bold text-cyan-400 mb-2">
                {edu.degree}
              </h3>
              <p className="text-gray-400 text-lg mb-2">{edu.school}</p>
              <p className="text-gray-400 text-sm mb-4">{edu.date}</p>
              {edu.cgpa && (
                <p className="text-gray-300">
                  <span className="font-bold">CGPA:</span> {edu.cgpa}
                </p>
              )}
              {edu.percentage && (
                <p className="text-gray-300">
                  <span className="font-bold">Percentage:</span>{" "}
                  {edu.percentage}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
