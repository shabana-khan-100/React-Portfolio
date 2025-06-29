import React from "react";

const certificationsData = [
  {
    name: "React.js Developer Certification",
    issuer: "Self-paced",
    date: "Present",
  },
];

const Certifications = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl md:text-8xl font-bold text-center mb-12">
          CERTIFICATIONS
        </h2>
        <div className="flex justify-center">
          {certificationsData.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105"
              style={{
                boxShadow: "0 0 15px rgba(0, 194, 255, 0.5)",
                border: "1px solid rgba(0, 194, 255, 0.5)",
              }}
            >
              <h3 className="text-2xl font-bold text-cyan-400 mb-2">
                {cert.name}
              </h3>
              <p className="text-gray-400 text-lg mb-2">{cert.issuer}</p>
              <p className="text-gray-400 text-sm mb-4">{cert.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
