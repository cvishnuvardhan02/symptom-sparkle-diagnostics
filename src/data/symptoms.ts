
export type Symptom = {
  id: string;
  name: string;
  description: string;
  bodyPart?: string;
  followUpQuestions?: string[];
  severity?: number;
};

export const symptoms: Symptom[] = [
  {
    id: "fever",
    name: "Fever",
    description: "Elevated body temperature above 38°C (100.4°F)",
    bodyPart: "general",
    followUpQuestions: [
      "How high is your temperature?",
      "How long have you had the fever?",
      "Do you have chills or sweating along with the fever?"
    ]
  },
  {
    id: "headache",
    name: "Headache",
    description: "Pain or discomfort in the head, scalp, or neck",
    bodyPart: "head",
    followUpQuestions: [
      "Where in your head do you feel pain?",
      "How would you describe the pain (throbbing, constant, etc.)?",
      "Does anything make the headache better or worse?"
    ]
  },
  {
    id: "cough",
    name: "Cough",
    description: "Sudden expulsion of air from the lungs",
    bodyPart: "chest",
    followUpQuestions: [
      "Is your cough dry or producing mucus/phlegm?",
      "How long have you had the cough?",
      "Do you cough more at certain times (night, morning)?"
    ]
  },
  {
    id: "fatigue",
    name: "Fatigue",
    description: "Feeling of tiredness, lack of energy, or exhaustion",
    bodyPart: "general",
    followUpQuestions: [
      "When did you start feeling fatigued?",
      "Does rest improve your fatigue?",
      "Has the fatigue developed suddenly or gradually?"
    ]
  },
  {
    id: "soreThroat",
    name: "Sore Throat",
    description: "Pain or irritation in the throat, especially when swallowing",
    bodyPart: "throat",
    followUpQuestions: [
      "How severe is the pain?",
      "Do you see any redness or white patches in your throat?",
      "Do you have difficulty swallowing?"
    ]
  },
  {
    id: "nauseaVomiting",
    name: "Nausea or Vomiting",
    description: "Feeling of sickness with an urge to vomit, or forceful expulsion of stomach contents",
    bodyPart: "stomach",
    followUpQuestions: [
      "Have you vomited or just feel nauseous?",
      "How frequently are you experiencing this?",
      "Is there anything that triggers or relieves the symptoms?"
    ]
  },
  {
    id: "jointPain",
    name: "Joint Pain",
    description: "Discomfort, aches, or soreness in one or more joints",
    bodyPart: "joints",
    followUpQuestions: [
      "Which joints are affected?",
      "Is there swelling, redness, or warmth in the affected joints?",
      "Does the pain limit your movement?"
    ]
  },
  {
    id: "rash",
    name: "Rash",
    description: "Change in skin color, appearance, or texture",
    bodyPart: "skin",
    followUpQuestions: [
      "Where on your body is the rash?",
      "Is the rash itchy, painful, or neither?",
      "Have you used any new products on your skin recently?"
    ]
  },
  {
    id: "diarrhea",
    name: "Diarrhea",
    description: "Loose, watery bowel movements",
    bodyPart: "abdomen",
    followUpQuestions: [
      "How many times a day are you having diarrhea?",
      "Is there blood or mucus in your stool?",
      "Have you eaten anything unusual recently?"
    ]
  },
  {
    id: "shortnessOfBreath",
    name: "Shortness of Breath",
    description: "Difficulty breathing or feeling like you can't get enough air",
    bodyPart: "chest",
    followUpQuestions: [
      "Does the shortness of breath occur at rest or with activity?",
      "Do you have a history of respiratory conditions?",
      "Does anything make the shortness of breath better or worse?"
    ]
  }
];

export const bodyParts = [
  { id: "head", name: "Head", symptoms: ["headache"] },
  { id: "throat", name: "Throat", symptoms: ["soreThroat"] },
  { id: "chest", name: "Chest", symptoms: ["cough", "shortnessOfBreath"] },
  { id: "stomach", name: "Stomach", symptoms: ["nauseaVomiting"] },
  { id: "abdomen", name: "Abdomen", symptoms: ["diarrhea"] },
  { id: "joints", name: "Joints", symptoms: ["jointPain"] },
  { id: "skin", name: "Skin", symptoms: ["rash"] },
  { id: "general", name: "General", symptoms: ["fever", "fatigue"] }
];
