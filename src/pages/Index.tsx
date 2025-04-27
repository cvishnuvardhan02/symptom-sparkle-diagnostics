
import React, { useState } from 'react';
import Header from '../components/Header';
import BodyMap from '../components/BodyMap';
import SymptomSelector from '../components/SymptomSelector';
import ResultsDisplay from '../components/ResultsDisplay';
import { predictConditions } from '../data/conditions';
import { Sparkles } from 'lucide-react';

const Index = () => {
  const [selectedBodyPart, setSelectedBodyPart] = useState<string | null>(null);
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);
  
  const handleBodyPartSelect = (bodyPartId: string) => {
    setSelectedBodyPart(bodyPartId);
  };
  
  const handleSymptomToggle = (symptomId: string) => {
    setSelectedSymptoms(prev =>
      prev.includes(symptomId)
        ? prev.filter(id => id !== symptomId)
        : [...prev, symptomId]
    );
  };
  
  const handleAnalyze = () => {
    setShowResults(true);
  };
  
  const handleReset = () => {
    setSelectedBodyPart(null);
    setSelectedSymptoms([]);
    setShowResults(false);
  };
  
  const analysisResults = predictConditions(selectedSymptoms);
  
  return (
    <div className="min-h-screen bg-medical-gray flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="py-10">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto animate-fade-in">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                Symptom Analysis & 
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-medical-blue to-medical-mint">
                  {' '}Disease Prediction
                </span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Identify potential health conditions based on your symptoms. 
                Select body areas, choose symptoms, and get instant analysis.
              </p>
            </div>
            
            <div className="mt-10 flex flex-wrap gap-8">
              {/* Left column - Body selection */}
              <div className="w-full lg:w-1/3 animate-fade-in">
                <BodyMap 
                  onSelectBodyPart={handleBodyPartSelect}
                  selectedBodyPart={selectedBodyPart}
                />
              </div>
              
              {/* Middle column - Symptom selection */}
              <div className="w-full lg:w-1/3 animate-fade-in" style={{animationDelay: "0.2s"}}>
                <SymptomSelector
                  bodyPart={selectedBodyPart}
                  selectedSymptoms={selectedSymptoms}
                  onSymptomToggle={handleSymptomToggle}
                />
                
                <div className="mt-6 flex space-x-4">
                  <button
                    onClick={handleReset}
                    className="px-6 py-3 border border-medical-blue text-medical-blue rounded-lg hover:bg-medical-blue/5 transition-colors"
                  >
                    Reset
                  </button>
                  
                  <button
                    onClick={handleAnalyze}
                    disabled={selectedSymptoms.length === 0}
                    className={`flex items-center justify-center space-x-2 px-6 py-3 rounded-lg transition-colors ${
                      selectedSymptoms.length === 0
                        ? 'bg-gray-300 cursor-not-allowed text-gray-500'
                        : 'bg-medical-blue hover:bg-opacity-90 text-white animate-pulse-gentle'
                    }`}
                  >
                    <Sparkles size={18} />
                    <span>Analyze Symptoms</span>
                  </button>
                </div>
              </div>
              
              {/* Right column - Results */}
              {showResults && (
                <div className="w-full lg:w-1/3 animate-fade-in" style={{animationDelay: "0.4s"}}>
                  <ResultsDisplay
                    results={analysisResults}
                    selectedSymptoms={selectedSymptoms}
                  />
                </div>
              )}
            </div>
          </div>
        </section>
        
        <section className="py-12 bg-medical-light/50">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Important Notice</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              This tool provides information for educational purposes only and is not a qualified medical opinion.
              Always consult healthcare professionals for medical advice, diagnosis, and treatment.
            </p>
          </div>
        </section>
      </main>
      
      <footer className="py-8 border-t">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground">
              © 2025 SymptomSparkle. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
