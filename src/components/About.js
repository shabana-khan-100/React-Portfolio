import React from "react";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen">
      <div className="md:w-1/2 p-8">
        <h2 className="text-6xl md:text-8xl font-bold relative inline-block">
          ABOUT
          <span
            className="absolute top-0 left-0 text-transparent"
            style={{ WebkitTextStroke: "1px #00c2ff" }}
          >
            ABOUT
          </span>
        </h2>
        <h2 className="text-6xl md:text-8xl font-bold relative inline-block mt-[-0.5em]">
          ME
          <span
            className="absolute top-0 left-0 text-transparent"
            style={{ WebkitTextStroke: "1px #00c2ff" }}
          >
            ME
          </span>
        </h2>
      </div>
      <div className="md:w-1/2 p-8">
        <p className="text-lg">
          Hey, I'm Shabana Khan, a Full Stack Developer. I've been working with
          React and Node for the past three years, building web applications
          that are fast, scalable and user-friendly.
        </p>
        <p className="text-lg mt-4">
          I like solving problems, learning new things, and experimenting with
          different technologies. When I'm not coding, I'm probably working on a
          side project or exploring something new.
        </p>
      </div>
    </div>
  );
};

export default About;
