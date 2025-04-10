import React from "react";

const About = () => {
  return (
    <section id="about" className="min-h-screen px-6 py-16 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
  <div className="max-w-4xl mx-auto glass-card">
    <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6">About Me</h2>
    <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-300">
      I’m a Software Engineer focused on cloud and backend development. I work with Python,
      Docker, Django, and AI agents. I enjoy optimizing workflows and building smart automation
      tools that solve real problems.
    </p>
  </div>
</section>
  );
};

export default About;
