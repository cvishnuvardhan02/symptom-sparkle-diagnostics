
import React from 'react';
import { Button } from '@/components/ui/button';
import { Ambulance } from 'lucide-react';

const Emergency = () => {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-8 animate-fade-in">
      <div className="glass-card p-8 border-destructive/20">
        <h1 className="text-3xl font-bold mb-6 text-destructive flex items-center gap-2">
          <Ambulance className="h-8 w-8" />
          Emergency Help
        </h1>
        <div className="space-y-6">
          <div className="bg-destructive/10 p-4 rounded-lg">
            <p className="text-destructive font-semibold mb-2">If you're experiencing a medical emergency:</p>
            <p className="text-foreground/80">Please call your local emergency services immediately:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>United States: 911</li>
              <li>Europe: 112</li>
              <li>UK: 999 or 112</li>
            </ul>
          </div>
          <Button variant="destructive" size="lg" className="w-full sm:w-auto" onClick={() => window.location.href = 'tel:911'}>
            <Ambulance className="mr-2 h-5 w-5" />
            Call Emergency Services
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Emergency;
