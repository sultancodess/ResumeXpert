import React from "react";
import { ArrowRight, FileText } from "lucide-react";

const Welcome = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-purple-800 p-6 text-center text-white">
      {/* Logo and Title */}
      <div className="flex items-center justify-center mb-8 animate-fade-in">
        <FileText className="w-16 h-16 mr-4 text-blue-300" />
        <h1 className="text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-purple-200">
          ResumeXpert
        </h1>
      </div>

      {/* Main Message */}
      <p className="text-2xl text-blue-100 mb-8 leading-relaxed">
        Welcome to the future of resume building. Your journey to creating the perfect resume starts here.
      </p>

      {/* Description */}
      <p className="text-lg text-blue-200 mb-12 max-w-2xl mx-auto">
        We're building something amazing - an AI-powered platform that will revolutionize how you create and optimize your resume. Stay tuned for our launch!
      </p>

      {/* CTA Button */}
      <button className="group inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-full transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-purple-800">
        Coming Soon
        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
};

export default Welcome;
