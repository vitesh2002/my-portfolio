import React from "react";

const projects = [
  {
    title: "API Development for Microservices",
    description:
      "Developed and implemented RESTful APIs for scalable microservice architecture, ensuring secure data transmission and efficient DB handling.",
  },
  {
    title: "Sentiment Analysis System",
    description:
      "Built a tool to analyze sentiment and categorize customer feedback from emails/social media using Python, cloud DB, and custom UI.",
  },
];

const Projects = () => {
  return (
    <div className="py-16 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-blue-600 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((proj, i) => (
          <div className="glass-card">
  <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">{proj.title}</h3>
  <p className="text-gray-800 dark:text-gray-300">{proj.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
