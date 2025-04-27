
import React from 'react';

const About = () => {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-8 animate-fade-in">
      <h1 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-medical-blue to-medical-mint">About SymptomSparkle</h1>
      <div className="prose prose-lg">
        <p className="text-foreground/80 mb-4">
          SymptomSparkle is a modern web application designed to help users understand their symptoms and get preliminary insights about possible conditions. Our goal is to provide a user-friendly interface for initial health assessment.
        </p>
        <p className="text-foreground/80 mb-4">
          Please note that this tool is for informational purposes only and should not be used as a substitute for professional medical advice, diagnosis, or treatment.
        </p>
      </div>
    </div>
  );
};

export default About;
