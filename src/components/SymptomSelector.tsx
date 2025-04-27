
import React, { useState } from 'react';
import { symptoms, Symptom } from '../data/symptoms';
import { Check, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface SymptomSelectorProps {
  bodyPart: string | null;
  selectedSymptoms: string[];
  onSymptomToggle: (symptomId: string) => void;
}

const SymptomSelector: React.FC<SymptomSelectorProps> = ({
  bodyPart,
  selectedSymptoms,
  onSymptomToggle
}) => {
  const [expandedSymptom, setExpandedSymptom] = useState<string | null>(null);
  
  // Filter symptoms by body part if one is selected
  const filteredSymptoms = bodyPart ? 
    symptoms.filter(symptom => symptom.bodyPart === bodyPart) : 
    symptoms;
  
  const toggleExpand = (symptomId: string) => {
    setExpandedSymptom(expandedSymptom === symptomId ? null : symptomId);
  };
  
  return (
    <div className="w-full">
      <div className="glass-card p-6 mb-4">
        <h3 className="text-lg font-medium mb-2">Select your symptoms</h3>
        <p className="text-muted-foreground">
          {bodyPart ? 
            `Showing symptoms related to: ${bodyPart}` : 
            "Showing all symptoms. Select a body part for more specific options."}
        </p>
      </div>
      
      <div className="space-y-3 w-full">
        {filteredSymptoms.map((symptom) => (
          <div 
            key={symptom.id}
            className="glass-card symptom-card overflow-hidden"
          >
            <div className="p-4 flex items-center justify-between" onClick={() => toggleExpand(symptom.id)}>
              <div className="flex items-center space-x-3">
                <div 
                  className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer ${
                    selectedSymptoms.includes(symptom.id) ? 
                    'bg-medical-mint text-white' : 
                    'bg-gray-100 text-gray-400'
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    onSymptomToggle(symptom.id);
                  }}
                >
                  {selectedSymptoms.includes(symptom.id) && <Check size={16} />}
                </div>
                <h4 className="font-medium">{symptom.name}</h4>
              </div>
              <div className="flex items-center space-x-3">
                <HelpCircle size={16} className="text-medical-blue opacity-70" />
                {expandedSymptom === symptom.id ? 
                  <ChevronUp size={16} /> : 
                  <ChevronDown size={16} />
                }
              </div>
            </div>
            
            {/* Expanded content */}
            {expandedSymptom === symptom.id && (
              <div className="px-4 pb-4 pt-2 bg-medical-light/50 border-t animate-fade-in">
                <p className="text-sm text-gray-600 mb-3">{symptom.description}</p>
                
                {/* Follow-up questions would be rendered here if selected */}
                {selectedSymptoms.includes(symptom.id) && symptom.followUpQuestions && (
                  <div className="mt-3 space-y-2">
                    <h5 className="text-sm font-medium text-medical-darkblue">Additional information:</h5>
                    <ul className="text-sm space-y-2">
                      {symptom.followUpQuestions.map((question, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-medical-blue">•</span>
                          <span>{question}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
        
        {filteredSymptoms.length === 0 && (
          <div className="glass-card p-6 text-center animate-fade-in">
            <p className="text-muted-foreground">
              No specific symptoms for this area. Try selecting a different body part or "General Symptoms".
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SymptomSelector;
