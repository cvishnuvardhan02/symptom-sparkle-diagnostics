
import React from 'react';
import { Sparkles } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full py-6">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-medical-blue to-medical-mint p-2 rounded-lg">
              <Sparkles className="h-6 w-6 text-white animate-pulse-gentle" />
            </div>
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-medical-blue to-medical-mint">
              SymptomSparkle
            </h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a className="text-foreground/80 hover:text-foreground transition-colors" href="#">Home</a>
            <a className="text-foreground/80 hover:text-foreground transition-colors" href="#">About</a>
            <a className="text-foreground/80 hover:text-foreground transition-colors" href="#">Contact</a>
          </nav>
          <div className="hidden md:block">
            <button className="bg-medical-blue hover:bg-opacity-90 text-white px-4 py-2 rounded-lg transition-colors">
              Emergency Help
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
