import React from "react";

const experienceData = [
  {
    text: "Started my career as a Frontend / Full-Stack Developer at ValueLabs, where I built and maintained scalable, responsive frontend applications using React, Next.js, Tailwind CSS, and Material UI.",
    date: "December 2022 - Present",
    category: {
      tag: "Job",
      color: "#FFDB14",
    },
  },
  {
    text: "Worked as an SDE and Mentor at Being Zero.",
    date: "Aug 2022 - Dec 2022",
    category: {
      tag: "Internship",
      color: "#e17b77",
    },
  },
];

const ExperienceItem = ({ data }) => (
  <div className="timeline-item">
    <div className="timeline-item-content">
      <span className="tag" style={{ background: data.category.color }}>
        {data.category.tag}
      </span>
      <time>{data.date}</time>
      <p>{data.text}</p>
      {data.link && (
        <a href={data.link.url} target="_blank" rel="noopener noreferrer">
          {data.link.text}
        </a>
      )}
      <span className="circle" />
    </div>
  </div>
);

const Experience = () =>
  experienceData.length > 0 && (
    <div className="timeline-container">
      <h2 className="text-6xl md:text-8xl font-bold text-center mb-12">
        EXPERIENCE
      </h2>
      {experienceData.map((item, idx) => (
        <ExperienceItem data={item} key={idx} />
      ))}
    </div>
  );

export default Experience;
