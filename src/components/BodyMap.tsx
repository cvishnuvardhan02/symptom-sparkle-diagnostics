
import React from 'react';
import { bodyParts } from '../data/symptoms';

interface BodyMapProps {
  onSelectBodyPart: (bodyPartId: string) => void;
  selectedBodyPart: string | null;
}

const BodyMap: React.FC<BodyMapProps> = ({ onSelectBodyPart, selectedBodyPart }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="glass-card p-6 mb-4 w-full">
        <h3 className="text-lg font-medium mb-2">Select area with symptoms</h3>
        <p className="text-muted-foreground mb-4">Click on the body part where you're experiencing symptoms</p>
      </div>
      
      <div className="relative w-full max-w-md h-[500px] flex items-center justify-center">
        {/* Simple body outline - in a real app, this would be a detailed SVG */}
        <svg viewBox="0 0 200 400" className="h-full" xmlns="http://www.w3.org/2000/svg">
          {/* Head */}
          <circle 
            cx="100" 
            cy="50" 
            r="40" 
            fill={selectedBodyPart === 'head' ? '#4ecca3' : '#3498db'} 
            className={`body-part ${selectedBodyPart === 'head' ? 'active' : ''}`}
            onClick={() => onSelectBodyPart('head')}
          />
          
          {/* Neck/Throat */}
          <rect 
            x="85" 
            y="90" 
            width="30" 
            height="20" 
            fill={selectedBodyPart === 'throat' ? '#4ecca3' : '#3498db'} 
            className={`body-part ${selectedBodyPart === 'throat' ? 'active' : ''}`}
            onClick={() => onSelectBodyPart('throat')}
          />
          
          {/* Chest */}
          <rect 
            x="70" 
            y="110" 
            width="60" 
            height="60" 
            fill={selectedBodyPart === 'chest' ? '#4ecca3' : '#3498db'} 
            className={`body-part ${selectedBodyPart === 'chest' ? 'active' : ''}`}
            onClick={() => onSelectBodyPart('chest')}
          />
          
          {/* Stomach */}
          <rect 
            x="70" 
            y="170" 
            width="60" 
            height="40" 
            fill={selectedBodyPart === 'stomach' ? '#4ecca3' : '#3498db'} 
            className={`body-part ${selectedBodyPart === 'stomach' ? 'active' : ''}`}
            onClick={() => onSelectBodyPart('stomach')}
          />
          
          {/* Abdomen */}
          <rect 
            x="70" 
            y="210" 
            width="60" 
            height="40" 
            fill={selectedBodyPart === 'abdomen' ? '#4ecca3' : '#3498db'} 
            className={`body-part ${selectedBodyPart === 'abdomen' ? 'active' : ''}`}
            onClick={() => onSelectBodyPart('abdomen')}
          />
          
          {/* Left Arm - Joints */}
          <rect 
            x="40" 
            y="110" 
            width="30" 
            height="100" 
            fill={selectedBodyPart === 'joints' ? '#4ecca3' : '#3498db'} 
            className={`body-part ${selectedBodyPart === 'joints' ? 'active' : ''}`}
            onClick={() => onSelectBodyPart('joints')}
          />
          
          {/* Right Arm - Joints */}
          <rect 
            x="130" 
            y="110" 
            width="30" 
            height="100" 
            fill={selectedBodyPart === 'joints' ? '#4ecca3' : '#3498db'} 
            className={`body-part ${selectedBodyPart === 'joints' ? 'active' : ''}`}
            onClick={() => onSelectBodyPart('joints')}
          />
          
          {/* Legs */}
          <rect 
            x="70" 
            y="250" 
            width="25" 
            height="120" 
            fill={selectedBodyPart === 'joints' ? '#4ecca3' : '#3498db'} 
            className={`body-part ${selectedBodyPart === 'joints' ? 'active' : ''}`}
            onClick={() => onSelectBodyPart('joints')}
          />
          <rect 
            x="105" 
            y="250" 
            width="25" 
            height="120" 
            fill={selectedBodyPart === 'joints' ? '#4ecca3' : '#3498db'} 
            className={`body-part ${selectedBodyPart === 'joints' ? 'active' : ''}`}
            onClick={() => onSelectBodyPart('joints')}
          />

          {/* General */}
          <text 
            x="100" 
            y="380" 
            textAnchor="middle" 
            fill={selectedBodyPart === 'general' ? '#4ecca3' : '#3498db'} 
            fontSize="14" 
            className={`body-part ${selectedBodyPart === 'general' ? 'active' : ''} cursor-pointer`}
            onClick={() => onSelectBodyPart('general')}
          >
            General Symptoms
          </text>
          
          {/* Skin */}
          <text 
            x="160" 
            y="250" 
            textAnchor="middle" 
            fill={selectedBodyPart === 'skin' ? '#4ecca3' : '#3498db'} 
            fontSize="14" 
            className={`body-part ${selectedBodyPart === 'skin' ? 'active' : ''} cursor-pointer`}
            onClick={() => onSelectBodyPart('skin')}
          >
            Skin
          </text>
        </svg>
      </div>
    </div>
  );
};

export default BodyMap;
