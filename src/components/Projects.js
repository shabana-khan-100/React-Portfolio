import { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import projectsData from "../data/projects.json";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl md:text-8xl font-bold text-center mb-12">
          PROJECTS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col justify-between transform transition-transform duration-300 hover:scale-105"
              style={{
                boxShadow: "0 0 15px rgba(0, 194, 255, 0.5)",
                border: "1px solid rgba(0, 194, 255, 0.5)",
              }}
            >
              <div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{project.date}</p>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-100 mb-2">
                    Tech Stack:
                  </h4>
                  <div className="flex flex-wrap">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-700 text-gray-200 text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              {/* <div className="mt-auto">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg"
                  >
                    <FaGithub className="mr-2" />
                    View on GitHub
                  </a>
                )}
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
