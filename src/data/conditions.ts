
export type Condition = {
  id: string;
  name: string;
  description: string;
  symptoms: string[];
  treatment: string;
  urgency: 'low' | 'medium' | 'high';
};

export const conditions: Condition[] = [
  {
    id: "common-cold",
    name: "Common Cold",
    description: "A viral infection of your nose and throat (upper respiratory tract).",
    symptoms: ["cough", "soreThroat", "headache", "fever"],
    treatment: "Rest, hydration, and over-the-counter medications for symptom relief.",
    urgency: "low"
  },
  {
    id: "flu",
    name: "Influenza",
    description: "A contagious respiratory illness caused by influenza viruses.",
    symptoms: ["fever", "cough", "soreThroat", "fatigue", "headache"],
    treatment: "Rest, hydration, antiviral medications if caught early. Seek medical attention if symptoms are severe.",
    urgency: "medium"
  },
  {
    id: "covid19",
    name: "COVID-19",
    description: "An infectious disease caused by the SARS-CoV-2 virus.",
    symptoms: ["fever", "cough", "fatigue", "shortnessOfBreath", "soreThroat", "headache"],
    treatment: "Rest, hydration, monitoring oxygen levels. Seek medical attention if symptoms worsen.",
    urgency: "medium"
  },
  {
    id: "strep-throat",
    name: "Strep Throat",
    description: "A bacterial infection that can cause a sore, scratchy throat.",
    symptoms: ["soreThroat", "fever", "headache"],
    treatment: "Antibiotics prescribed by a doctor. Rest and pain relievers.",
    urgency: "medium"
  },
  {
    id: "gastroenteritis",
    name: "Gastroenteritis",
    description: "Inflammation of the stomach and intestines, typically resulting from bacterial or viral infections.",
    symptoms: ["nauseaVomiting", "diarrhea", "fever", "fatigue"],
    treatment: "Hydration, rest, and gradual return to normal diet. Seek medical care if unable to keep fluids down.",
    urgency: "medium"
  },
  {
    id: "migraine",
    name: "Migraine",
    description: "A headache of varying intensity, often accompanied by nausea and sensitivity to light and sound.",
    symptoms: ["headache", "nauseaVomiting"],
    treatment: "Pain relievers, rest in a dark quiet room, prescription medications for chronic sufferers.",
    urgency: "low"
  },
  {
    id: "pneumonia",
    name: "Pneumonia",
    description: "Infection that inflames air sacs in one or both lungs, which may fill with fluid.",
    symptoms: ["cough", "fever", "shortnessOfBreath", "fatigue"],
    treatment: "Antibiotics for bacterial pneumonia, rest, and increased fluid intake.",
    urgency: "high"
  },
  {
    id: "allergic-reaction",
    name: "Allergic Reaction",
    description: "An immune system response to a substance that the body mistakenly identifies as harmful.",
    symptoms: ["rash", "shortnessOfBreath"],
    treatment: "Antihistamines, avoiding the allergen. Seek immediate help for severe reactions.",
    urgency: "medium"
  },
  {
    id: "arthritis",
    name: "Arthritis",
    description: "Inflammation of one or more joints, causing pain and stiffness.",
    symptoms: ["jointPain"],
    treatment: "Anti-inflammatory medications, physical therapy, lifestyle modifications.",
    urgency: "low"
  }
];

export const predictConditions = (selectedSymptoms: string[]): 
  {condition: Condition, matchPercentage: number}[] => {
  
  return conditions.map(condition => {
    // Calculate how many symptoms match
    const matchingSymptoms = condition.symptoms.filter(symptom => 
      selectedSymptoms.includes(symptom));
    
    // Calculate percentage based on matching symptoms vs condition symptoms
    const matchPercentage = (matchingSymptoms.length / condition.symptoms.length) * 100;
    
    return {
      condition,
      matchPercentage: Math.round(matchPercentage)
    };
  })
  .filter(result => result.matchPercentage > 0) // Only include if there's at least 1 matching symptom
  .sort((a, b) => b.matchPercentage - a.matchPercentage); // Sort by highest match percentage
};
