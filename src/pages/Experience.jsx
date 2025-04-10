import React from "react";

const Experience = () => {
  return (
    <div className="py-16 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-blue-600 text-center">Experience</h2>
      <div className="glass-card mb-6">
  <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400">Associate Software Engineer — Networkwize</h3>
  <p className="text-gray-800 dark:text-gray-300">June 2023 – Present | Noida, India</p>
  <ul className="mt-4 list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
          <li>Improved API response time by 30% through optimized queries.</li>
          <li>Integrated multiple CRM platforms using OAuth for mail database sync.</li>
          <li>Increased test coverage by 50% using Pytest.</li>
          <li>Reduced page load time by 60% through query optimization.</li>
          <li>Built Django wizard workflow for visual graph generation using stats.</li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
