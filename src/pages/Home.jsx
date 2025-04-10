import React from "react";

const Home = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center px-4 pt-20 bg-gradient-to-b from-white via-blue-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-500">
      <h1 className="text-4xl md:text-6xl font-bold text-blue-600 mb-4">Namburu sai srinivas vitesh</h1>
      <p className="text-xl md:text-2xl text-gray-700">Software Engineer | Backend & Cloud Specialist</p>
      <p className="mt-4 text-gray-500 max-w-xl">
        Passionate about cloud, automation, APIs, and scalable software solutions.
      </p>
    </div>
  );
};

export default Home;
