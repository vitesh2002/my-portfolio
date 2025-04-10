import React from "react";

const Skills = () => {
  const skills = ["Python", "Django", "Docker", "Kubernetes", "GCP", "PostgreSQL", "MongoDB", "Terraform", "Linux", "API Development"];

  return (
    <section id="skills" className="px-6 py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-8">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <span key={skill} className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-semibold">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
