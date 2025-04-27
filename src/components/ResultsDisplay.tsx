
import React from 'react';
import { Condition } from '../data/conditions';
import { symptoms } from '../data/symptoms';
import { AlertTriangle, CheckCircle, Info } from 'lucide-react';

interface ResultsDisplayProps {
  results: { condition: Condition; matchPercentage: number }[];
  selectedSymptoms: string[];
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ results, selectedSymptoms }) => {
  if (!results.length) {
    return (
      <div className="glass-card p-8 text-center animate-fade-in">
        <p className="text-lg">Select symptoms to see potential conditions</p>
      </div>
    );
  }

  // Get names of selected symptoms for display
  const selectedSymptomNames = selectedSymptoms.map(
    id => symptoms.find(s => s.id === id)?.name || id
  );

  return (
    <div className="w-full space-y-6 animate-fade-in">
      <div className="glass-card p-6">
        <h3 className="text-xl font-medium mb-4">Analysis Results</h3>
        <div className="space-y-2 mb-4">
          <p className="text-muted-foreground">Based on your symptoms:</p>
          <div className="flex flex-wrap gap-2">
            {selectedSymptomNames.map((name, i) => (
              <span
                key={i}
                className="bg-medical-light px-3 py-1 rounded-full text-sm text-medical-darkblue"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
        
        <div className="text-sm text-muted-foreground italic mb-6">
          <p>
            <strong className="text-foreground">Note:</strong> This is not a medical diagnosis. 
            Always consult with a healthcare professional for proper medical advice.
          </p>
        </div>

        <div className="space-y-4">
          {results.slice(0, 3).map((result) => {
            const { condition, matchPercentage } = result;
            
            // Determine urgency indicator
            let UrgencyIcon = Info;
            let urgencyColor = "text-medical-blue";
            let urgencyBg = "bg-medical-light";
            
            if (condition.urgency === "high") {
              UrgencyIcon = AlertTriangle;
              urgencyColor = "text-red-500";
              urgencyBg = "bg-red-50";
            } else if (condition.urgency === "medium") {
              UrgencyIcon = Info;
              urgencyColor = "text-amber-500";
              urgencyBg = "bg-amber-50";
            } else {
              UrgencyIcon = CheckCircle;
              urgencyColor = "text-green-500";
              urgencyBg = "bg-green-50";
            }
            
            return (
              <div
                key={condition.id}
                className={`border rounded-xl overflow-hidden ${
                  matchPercentage > 70 ? "border-medical-mint" : "border-gray-200"
                }`}
              >
                <div className="flex items-center justify-between p-4 border-b bg-gray-50">
                  <div className="flex items-center space-x-3">
                    <div className={`w-2 h-8 rounded-full ${matchPercentage > 70 ? "bg-medical-mint" : "bg-gray-300"}`}></div>
                    <h4 className="font-medium">{condition.name}</h4>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span 
                      className={`text-sm font-medium ${
                        matchPercentage > 70 ? "text-medical-mint" : "text-gray-500"
                      }`}
                    >
                      {matchPercentage}% match
                    </span>
                    <div 
                      className="w-full bg-gray-200 rounded-full h-2 ml-2"
                      style={{ width: '100px' }}
                    >
                      <div 
                        className={`h-2 rounded-full ${matchPercentage > 70 ? "bg-medical-mint" : "bg-gray-400"}`}
                        style={{ width: `${matchPercentage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <p className="text-gray-600 mb-4">{condition.description}</p>
                  
                  <div className={`flex items-center space-x-2 ${urgencyColor} mb-3`}>
                    <UrgencyIcon size={16} />
                    <span className="text-sm font-medium capitalize">
                      {condition.urgency} urgency
                    </span>
                  </div>
                  
                  <div className="mt-4">
                    <h5 className="text-sm font-medium mb-2">Typical treatment:</h5>
                    <p className="text-sm text-gray-600">{condition.treatment}</p>
                  </div>
                  
                  <div className="mt-4">
                    <h5 className="text-sm font-medium mb-2">Common symptoms:</h5>
                    <div className="flex flex-wrap gap-2">
                      {condition.symptoms.map((symptomId) => {
                        const symptom = symptoms.find(s => s.id === symptomId);
                        const isSelected = selectedSymptoms.includes(symptomId);
                        
                        return (
                          <span
                            key={symptomId}
                            className={`px-3 py-1 rounded-full text-sm ${
                              isSelected
                                ? "bg-medical-mint/20 text-medical-darkblue border border-medical-mint/30"
                                : "bg-gray-100 text-gray-600"
                            }`}
                          >
                            {symptom?.name || symptomId}
                            {isSelected && <span className="ml-1">✓</span>}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ResultsDisplay;
