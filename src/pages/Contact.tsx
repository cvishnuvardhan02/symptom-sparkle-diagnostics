
import React from 'react';

const Contact = () => {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-8 animate-fade-in">
      <h1 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-medical-blue to-medical-mint">Contact Us</h1>
      <div className="glass-card p-6">
        <p className="text-foreground/80 mb-6">
          If you have any questions or concerns, please don't hesitate to reach out to us.
        </p>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="font-medium">Email:</span>
            <a href="mailto:support@symptomsparkle.com" className="text-medical-blue hover:text-medical-mint transition-colors">
              support@symptomsparkle.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-medium">Phone:</span>
            <a href="tel:+1-800-SYMPTOMS" className="text-medical-blue hover:text-medical-mint transition-colors">
              1-800-SYMPTOMS
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
