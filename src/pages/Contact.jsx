import React from "react";

const Contact = () => {
  return (
    <div className="py-16 px-6 max-w-xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6 text-blue-600">Contact</h2>
      <p className="mb-4 text-gray-700">Have a question or want to work together?</p>
      <a href="mailto:nviteshn@gmail.com" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition">
        Say Hello
      </a>
    </div>
  );
};

export default Contact;
